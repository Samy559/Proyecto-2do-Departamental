'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COURSES = [
  {
    id: 1,
    title: 'Ingeniería en Desarrollo de Software & Cloud',
    category: 'Ingeniería & Tecnología',
    duration: '9 Cuatrimestres',
    modality: '100% En Línea',
    description: 'Aprende arquitectura de software, bases de datos, APIs y despliegue en entornos cloud modernos con metodologías ágiles.',
    badge: 'Más Solicitado',
  },
  {
    id: 2,
    title: 'Ciencia de Datos e Inteligencia Artificial',
    category: 'Tecnologías Emergentes',
    duration: '9 Cuatrimestres',
    modality: '100% En Línea',
    description: 'Domina Python, Machine Learning, Deep Learning y análisis masivo de datos para resolver problemas complejos.',
    badge: 'Alta Demanda',
  },
  {
    id: 3,
    title: 'Administración y Gestión de Negocios Digitales',
    category: 'Negocios',
    duration: '8 Cuatrimestres',
    modality: '100% En Línea',
    description: 'Lidera organizaciones con visión estratégica, finanzas digitales, marketing y transformación empresarial.',
    badge: 'Oficial',
  },
  {
    id: 4,
    title: 'Diplomado en Ciberseguridad Defensiva y Ofensiva',
    category: 'Certificación Profesional',
    duration: '6 Meses',
    modality: 'Asincrónico 24/7',
    description: 'Protección de infraestructura, análisis forense digital, pentesting y normativas internacionales de seguridad.',
    badge: 'Certificado Digital',
  },
  {
    id: 5,
    title: 'Certificación en Computación en la Nube y DevOps',
    category: 'Certificación Profesional',
    duration: '4 Meses',
    modality: 'Práctico con Laboratorios',
    description: 'Implementación de pipelines CI/CD, contenedores Docker, orquestación con Kubernetes y gestión en AWS/Azure.',
    badge: 'Proyectos Reales',
  },
  {
    id: 6,
    title: 'Curso Propedéutico e Inducción al Campus Moodle',
    category: 'Inducción Estudiantil',
    duration: '2 Semanas',
    modality: 'Autoestudio guiado',
    description: 'Aprende el uso del campus virtual, entrega de tareas, exámenes en línea y comunicación directa con tus tutores.',
    badge: 'Gratuito Estudiantes',
  },
];

export default function CoursesModal({ isOpen, onClose }: CoursesModalProps) {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  if (!isOpen) return null;

  const categories = ['Todos', 'Ingeniería & Tecnología', 'Negocios', 'Certificación Profesional'];

  const filteredCourses = selectedFilter === 'Todos'
    ? COURSES
    : COURSES.filter(c => c.category === selectedFilter || (selectedFilter === 'Certificación Profesional' && c.category.includes('Certificación')));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#0066FF] text-white flex justify-between items-start">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full inline-block mb-2">
              Oferta Académica 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Todos nuestros cursos y programas
            </h2>
            <p className="text-blue-100 text-sm mt-1 max-w-xl">
              Descubre las carreras y certificaciones con validez curricular, diseñadas por expertos de la industria.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition text-white text-xl font-bold"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto text-xs font-semibold">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-[#0066FF] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 max-h-[55vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {course.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span>⏱ {course.duration}</span>
                    <span>💻 {course.modality}</span>
                  </div>
                  <Link
                    href="/registro"
                    onClick={onClose}
                    className="font-bold text-[#0066FF] hover:underline"
                  >
                    Inscribirme &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            ¿Tienes dudas sobre los planes de estudio? Contáctanos y un asesor te guiará.
          </p>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              Cerrar
            </button>
            <Link
              href="/registro"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-xs font-bold text-white transition text-center shadow-md"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
