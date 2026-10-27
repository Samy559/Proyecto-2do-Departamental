import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoodleService {
  private moodleUrl = process.env.MOODLE_URL;
  private token = process.env.MOODLE_TOKEN;

  async createMoodleUser(user: { email: string; firstName: string; lastName: string; username: string }) {
    const params = new URLSearchParams({
      wstoken: this.token || '',
      wsfunction: 'core_user_create_users',
      moodlewsrestformat: 'json',
      'users[0][username]': user.username.toLowerCase(),
      'users[0][email]': user.email.toLowerCase(),
      'users[0][firstname]': user.firstName,
      'users[0][lastname]': user.lastName,
      'users[0][password]': 'TempPassword123!',
    });

    const response = await axios.post(this.moodleUrl || '', params.toString());
    if (response.data && response.data.exception) {
      throw new HttpException(`Error Moodle: ${response.data.message}`, HttpStatus.BAD_REQUEST);
    }
    return response.data[0];
  }

  async enrolUser(moodleUserId: number, courseId: number, roleId: number = 5) {
    const params = new URLSearchParams({
      wstoken: this.token || '',
      wsfunction: 'enrol_manual_enrol_users',
      moodlewsrestformat: 'json',
      'enrolments[0][roleid]': roleId.toString(),
      'enrolments[0][userid]': moodleUserId.toString(),
      'enrolments[0][courseid]': courseId.toString(),
    });

    const response = await axios.post(this.moodleUrl || '', params.toString());
    return response.data;
  }

  async getUserCourses(moodleUserId: number) {
    const params = new URLSearchParams({
      wstoken: this.token || '',
      wsfunction: 'core_enrol_get_users_courses',
      moodlewsrestformat: 'json',
      userid: moodleUserId.toString(),
    });

    const response = await axios.post(this.moodleUrl || '', params.toString());
    return response.data;
  }
}