import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MoodleService } from '../moodle/moodle.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private moodle: MoodleService,
    private jwtService: JwtService,
  ) {}

  async register(data: { email: string; password: string; firstName: string; lastName: string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existing) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const passwordHash = await bcrypt.hash(data.password, 10);
    const username = data.email.split('@')[0] + Math.floor(100 + Math.random() * 900);

    // 1. Invocar API de Moodle
    const moodleUser = await this.moodle.createMoodleUser({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      username,
    });

    // 2. Matricular en el curso de inducción predeterminado
    const defaultCourseId = parseInt(process.env.MOODLE_DEFAULT_COURSE_ID || '2', 10);
    try {
      await this.moodle.enrolUser(moodleUser.id, defaultCourseId, 5);
    } catch (e) {
      console.warn('Advertencia en matriculación:', e);
    }

    // 3. Guardar usuario en PostgreSQL
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'ESTUDIANTE',
        moodleUserId: moodleUser.id,
      },
    });

    return { message: 'Usuario creado exitosamente', userId: user.id };
  }

  async login(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isValid = await bcrypt.compare(data.password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { sub: user.id, email: user.email, role: user.role, moodleUserId: user.moodleUserId };
    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        moodleUserId: user.moodleUserId,
      },
    };
  }

  async getCourses(moodleUserId: number) {
    if (!moodleUserId) return [];
    return this.moodle.getUserCourses(moodleUserId);
  }
}