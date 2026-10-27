'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import IiniciaLogo from '@/components/IiniciaLogo';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);
      axios
        .get(`http://localhost:4000/api/courses?moodleUserId=${parsedUser.moodleUserId}`)
        .then(res => setCourses(res.data))
        .catch(err => console.error('Error al cargar cursos:', err))
        .finally(() => setLoading(false));
    } catch {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#edf6fd] flex flex-col items-center justify-center p-6 text-slate-800">
        <div className="p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center gap-4 border border-blue-100 animate-pulse">
          <IiniciaLogo size="md" className="filter invert" />
          <p className="text-sm font-semibold text-slate-600 mt-2">Cargando tu aula virtual...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#edf6fd] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <header className="bg-slate-950 text-white border-b border-slate-800 px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="hover:opacity-90 transition">
            <IiniciaLogo size="sm" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:inline-flex text-xs font-semibold text-slate-300 hover:text-white transition"
            >
              Sitio Oficial
            </Link>
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{user.firstName} {user.lastName}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs font-bold text-slate-300 hover:text-red-400 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* Hero Welcome Banner (Navy with atmospheric photo and curve styling) */}
        <div className="relative bg-slate-950 text-white rounded-[32px] overflow-hidden p-7 sm:p-10 shadow-xl border border-slate-800">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Fondo Campus"
              fill
              className="object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/60" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-widest bg-[#0066FF] px-3 py-0.5 rounded-full">
                  Campus Virtual
                </span>
                <span className="text-xs text-slate-400">ID Moodle: #{user.moodleUserId}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Bienvenido, {user.firstName} {user.lastName} 👋
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                Continúa con tu plan de estudio 100% en línea. Todas tus actividades y calificaciones
                están sincronizadas con el servidor central Moodle.
              </p>
            </div>

            <a
              href="http://localhost:8080"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#0066FF] hover:bg-[#0055d4] active:scale-95 transition-all text-white font-bold tracking-wider uppercase text-xs sm:text-sm px-8 py-3.5 shadow-lg shadow-blue-600/30"
            >
              <span>ENTRAR AL CAMPUS LMS</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center text-2xl font-bold">
              📚
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Materias Asignadas</p>
              <h3 className="text-2xl font-extrabold text-[#0e1f38]">{courses.length}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
              🎓
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Estado Académico</p>
              <h3 className="text-base font-bold text-emerald-600">Alumno Regular</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold">
              ⚡
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Modalidad de Estudio</p>
              <h3 className="text-base font-bold text-slate-800">100% Asincrónico 24/7</h3>
            </div>
          </div>
        </div>

        {/* Authorized Courses Section */}
        <section className="bg-white rounded-[28px] p-6 sm:p-9 shadow-sm border border-blue-100/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#0066FF] rounded-full" />
                <h2 className="text-2xl font-extrabold text-[#0e1f38] tracking-tight">
                  Mis Cursos Autorizados
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-4.5">
                Acceso directo al contenido de tus materias en la plataforma Moodle.
              </p>
            </div>

            <a
              href="http://localhost:8080/my/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1"
            >
              <span>Ver mis entregas y tareas pendientes</span>
              <span>&rarr;</span>
            </a>
          </div>

          {courses.length === 0 ? (
            <div className="py-14 text-center max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center text-3xl">
                📖
              </div>
              <h3 className="text-base font-bold text-slate-800">No hay cursos asignados todavía</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Tu matriculación está en proceso de verificación por la secretaría académica o aún no
                has seleccionado tus materias del cuatrimestre.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
                >
                  Explorar oferta académica
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {courses.map(course => (
                <div
                  key={course.id}
                  className="p-6 rounded-2xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all bg-white flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full">
                        Materia Oficial
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Código: {course.shortname}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-lg text-[#0e1f38] group-hover:text-[#0066FF] transition leading-snug">
                      {course.fullname}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      Plan de estudios avalado por la Universidad IINICIA. Materiales didácticos,
                      foros y evaluaciones disponibles.
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">ID Curso: {course.id}</span>
                    <a
                      href={`http://localhost:8080/course/view.php?id=${course.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:text-blue-800 transition"
                    >
                      <span>Ir a la materia en Moodle</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}