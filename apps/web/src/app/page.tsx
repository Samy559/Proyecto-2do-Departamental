'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IiniciaLogo from '@/components/IiniciaLogo';
import WhyChooseUsIllustration from '@/components/WhyChooseUsIllustration';
import CoursesModal from '@/components/CoursesModal';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesModalOpen, setCoursesModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#edf6fd] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (Image 1)
          Dark photographic background with student studying,
          condensed title "UNIVERSIDAD I²NICIA", subtitle, and blue CTA button.
          Bottom curved transition into the light blue section.
      ───────────────────────────────────────────────────────────── */}
      <div className="relative bg-slate-950 text-white rounded-br-[50px] sm:rounded-br-[90px] md:rounded-br-[120px] overflow-hidden shadow-xl z-10">
        {/* Background photo with moody lighting */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Estudiante en biblioteca IINICIA"
            fill
            priority
            className="object-cover object-center opacity-40 scale-105"
          />
          {/* Gradients to match the deep dark navy mood of the screenshots */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-slate-950/80 to-[#080f1c]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0066ff15,transparent_60%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-[640px] sm:min-h-[720px]">
          {/* Navigation Bar */}
          <header className="w-full px-6 py-5 sm:px-10 max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="transition hover:opacity-95" aria-label="IINICIA Inicio">
              <IiniciaLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
              <button
                onClick={() => setCoursesModalOpen(true)}
                className="text-slate-200 hover:text-white transition"
              >
                Cursos
              </button>
              <a href="#experiencia" className="text-slate-200 hover:text-white transition">
                Experiencia
              </a>
              <a href="#certificacion" className="text-slate-200 hover:text-white transition">
                Certificación
              </a>
              <a href="#por-que-elegirnos" className="text-slate-200 hover:text-white transition">
                ¿Por qué elegirnos?
              </a>
              <a href="#opiniones" className="text-slate-200 hover:text-white transition">
                Opiniones
              </a>
              <Link
                href="/login"
                className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
              >
                Mi IINICIA
              </Link>
              <Link
                href="/registro"
                className="px-6 py-2.5 rounded-full bg-[#0066FF] text-white hover:bg-blue-600 font-bold transition shadow-md"
              >
                Registro
              </Link>
            </nav>

            {/* Mobile Hamburger Menu Button (Matches Screenshot 1 exactly) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-12 h-11 bg-[#0066FF] hover:bg-blue-700 active:scale-95 transition-all flex flex-col items-center justify-center gap-1.5 shadow-md rounded-[4px]"
              aria-label="Abrir menú de navegación"
            >
              <span className="w-6 h-[2.5px] bg-white rounded-full transition-all" />
              <span className="w-6 h-[2.5px] bg-white rounded-full transition-all" />
              <span className="w-6 h-[2.5px] bg-white rounded-full transition-all" />
            </button>
          </header>

          {/* Mobile Slide-Over Drawer */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div className="fixed right-0 top-0 bottom-0 w-[290px] bg-slate-950 p-6 flex flex-col justify-between shadow-2xl border-l border-slate-800 animate-in slide-in-from-right duration-200">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                    <IiniciaLogo size="sm" />
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold"
                      aria-label="Cerrar menú"
                    >
                      ✕
                    </button>
                  </div>
                  <nav className="flex flex-col gap-4 mt-6 text-base font-semibold">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white hover:text-sky-400 py-1 transition"
                    >
                      Inicio
                    </Link>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCoursesModalOpen(true);
                      }}
                      className="text-left text-slate-300 hover:text-white py-1 transition"
                    >
                      Todos nuestros cursos
                    </button>
                    <a
                      href="#experiencia"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-white py-1 transition"
                    >
                      Experiencia
                    </a>
                    <a
                      href="#certificacion"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-white py-1 transition"
                    >
                      Certificación
                    </a>
                    <a
                      href="#por-que-elegirnos"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-white py-1 transition"
                    >
                      ¿Por qué elegirnos?
                    </a>
                    <a
                      href="#opiniones"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-white py-1 transition"
                    >
                      Opiniones de estudiantes
                    </a>
                  </nav>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-3 text-center rounded-xl border border-blue-500/40 text-blue-400 font-bold hover:bg-blue-500/10 transition"
                  >
                    Acceso a Mi IINICIA
                  </Link>
                  <Link
                    href="/registro"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-3 text-center rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-bold transition shadow-lg"
                  >
                    Comienza Ahora
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Hero Main Body */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-6 pb-24 sm:pb-28 max-w-3xl mx-auto">
            {/* Title: UNIVERSIDAD ÎNICIA (On a single line, Bebas Neue, tall condensed) */}
            <h1 className="font-bebas text-[2.75rem] xs:text-5xl sm:text-7xl md:text-8xl tracking-[0.03em] uppercase text-white drop-shadow-md whitespace-nowrap leading-none select-none">
              UNIVERSIDAD{' '}
              <span className="inline-block relative">
                I<span className="relative -top-2 text-[0.6em] font-sans font-bold">2</span>NICIA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 text-sm sm:text-lg md:text-xl font-normal text-white/95 max-w-md sm:max-w-lg leading-relaxed">
              Tu educación comienza hoy, estés donde estés.
              <span className="block mt-3">
                El conocimiento que transforma tu vida está a tu alcance, en todo momento.
              </span>
            </p>

            {/* CTA Button: COMIENZA AHORA (Pill vibrante azul #0066FF) */}
            <div className="mt-8">
              <Link
                href="/registro"
                className="inline-flex items-center justify-center rounded-full bg-[#0066FF] hover:bg-[#0055d4] active:scale-95 transition-all text-white font-bold tracking-wider uppercase text-xs sm:text-sm px-9 py-3.5 shadow-lg shadow-blue-600/30"
              >
                COMIENZA AHORA
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom sweep curve matching Screenshot 1 exactly (sweeps up on the bottom right) */}
        <div className="absolute bottom-0 right-0 w-full overflow-hidden pointer-events-none z-10 leading-none">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-20 fill-[#edf6fd] block"
          >
            <path d="M 0,100 L 1000,100 L 1000,0 C 880,65 520,100 0,100 Z" />
          </svg>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TODOS NUESTROS CURSOS SECTION (Image 1 bottom & Image 2 top)
          Ice-blue background (#edf6fd), left vertical blue bar accent,
          and "VER TODOS LOS CURSOS" pill button.
      ───────────────────────────────────────────────────────────── */}
      <section id="cursos" className="bg-[#edf6fd] pt-8 sm:pt-12 pb-14 px-6 sm:px-10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1f38] tracking-tight">
            Todos nuestros cursos
          </h2>

          {/* Vertical accent bar with quote */}
          <div className="flex items-stretch gap-4 my-7">
            <div className="w-1.5 bg-[#0066FF] shrink-0" />
            <p className="text-[#334155] text-base sm:text-lg leading-relaxed font-normal py-0.5">
              Impulsa tu futuro con aprendizaje de excelencia. ¡Confía en los expertos y alcanza tus
              metas con nosotros!
            </p>
          </div>

          {/* Button: VER TODOS LOS CURSOS */}
          <button
            onClick={() => setCoursesModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-[#0066FF] hover:bg-[#0055d4] active:scale-95 transition-all text-white font-bold tracking-wide uppercase text-xs sm:text-sm px-8 py-3.5 shadow-md cursor-pointer"
          >
            VER TODOS LOS CURSOS
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FEATURES SECTION: EXPERIENCIA, CERTIFICACIÓN, EVALUACIÓN (Image 2 & 3)
          Deep dark navy background with subtle desk ambience.
          Centered typography and "COMIENZA AHORA" button under Certificación.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="experiencia"
        className="relative bg-[#09111c] text-white py-20 px-6 sm:px-12 overflow-hidden"
      >
        {/* Subtle dark ambient texture */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <Image
            src="/hero-bg.jpg"
            alt="Fondo oscuro ambientado"
            fill
            className="object-cover blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#09111c] via-[#09111c]/95 to-[#09111c] z-0" />

        <div className="relative z-10 max-w-xl mx-auto space-y-16 text-center">
          {/* Item 1: Experiencia */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
              Experiencia
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-normal">
              Transforma teoría en práctica con proyectos que simulan situaciones reales del
              entorno laboral actual.
            </p>
          </div>

          {/* Item 2: Certificación (con botón COMIENZA AHORA) */}
          <div id="certificacion">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
              Certificación
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-normal">
              Obtén certificados digitales por cada curso completado, válidos para enriquecer tu
              currículum y fortalecer tu perfil profesional.
            </p>
            <div className="mt-7">
              <Link
                href="/registro"
                className="inline-flex items-center justify-center rounded-full bg-[#0066FF] hover:bg-[#0055d4] active:scale-95 transition-all text-white font-bold tracking-wider uppercase text-xs sm:text-sm px-9 py-3.5 shadow-lg shadow-blue-600/30"
              >
                COMIENZA AHORA
              </Link>
            </div>
          </div>

          {/* Item 3: Evaluación */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
              Evaluación
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-normal">
              Contenidos alineados al plan de estudios oficial, impartidos por expertos en cada
              materia y disponibles 24/7 para que aprendas a tu ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ¿POR QUÉ ELEGIRNOS? SECTION (Image 3 bottom & Image 4)
          Clean light off-white background (#f8fafc), dark teal/navy title,
          introductory paragraphs, and custom illustration with smartphone & student.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="por-que-elegirnos"
        className="bg-[#f8fafc] pt-20 pb-16 px-6 sm:px-12 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00406c] tracking-wide uppercase">
            ¿POR QUÉ ELEGIRNOS?
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium mt-6 mb-4">
            En IINICIA, tu aprendizaje se adapta a tu vida.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10">
            Diseñamos una experiencia flexible para que puedas estudiar sin dejar de lado tus
            responsabilidades diarias. Aprende a tu ritmo, desde donde estés, y haz que cada día
            cuente mientras construyes tu futuro profesional.
          </p>

          {/* Vector Illustration (Smartphone, 5 golden stars card, gears & student with clipboard) */}
          <div className="mt-8 flex justify-center">
            <WhyChooseUsIllustration />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TESTIMONIALS & SOCIAL PROOF SECTION (Image 5)
          Soft pastel ice-blue background (#eaf4fc),
          handwritten script font title ("Contamos con la confianza de miles de estudiantes y tutores"),
          Google Reviews rating "4.8" with blue stars,
          and testimonial card with Emma Hart's portrait.
      ───────────────────────────────────────────────────────────── */}
      <section id="opiniones" className="bg-[#eaf4fc] pt-16 pb-24 px-6 sm:px-12">
        <div className="max-w-md mx-auto">
          {/* Heading in handwritten cursive script font */}
          <h2 className="font-caveat text-4xl sm:text-5xl text-[#1e3a5f] text-center font-bold leading-tight mb-8">
            Contamos con la confianza de miles de estudiantes y tutores
          </h2>

          {/* Rating Block: 4.8 + Google Reviews */}
          <div className="flex items-center justify-center gap-3.5 mb-10">
            {/* Big 4.8 */}
            <span className="font-black text-6xl sm:text-7xl text-[#162d4a] leading-none tracking-tight">
              4.8
            </span>

            {/* Stars & Google Reviews labels */}
            <div className="flex flex-col justify-center">
              {/* 5 Blue Stars */}
              <div className="flex items-center gap-1 text-[#0066FF] text-xl sm:text-2xl leading-none">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              {/* Handwritten sub-label */}
              <div className="font-caveat text-[#1e3a5f] text-xl sm:text-2xl leading-tight mt-1">
                <p>Google Reviews</p>
                <p>2,394 valoraciones</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-[26px] p-6 sm:p-8 shadow-sm border border-blue-100/60 relative">
            {/* Emma Hart Avatar */}
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm mb-5 border border-slate-100">
              <Image
                src="/emma-hart.jpg"
                alt="Emma Hart - Estudiante IINICIA"
                fill
                className="object-cover"
              />
            </div>

            {/* Quote */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
              &ldquo;Estudiar en IINICIA ha sido una excelente decisión. La flexibilidad y el apoyo
              constante hacen que realmente valga la pena. La recomiendo totalmente.&rdquo;
            </p>

            {/* Author */}
            <div className="pt-1 pb-3">
              <h4 className="font-bold text-slate-900 text-base">Emma Hart</h4>
              <div className="flex items-center gap-1 text-[#0066FF] text-sm mt-3">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button (Lower left/right assistance button matching Image 5) */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40">
        <a
          href="https://wa.me/?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Universidad%20IINICIA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0066FF] hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
          aria-label="Contactar por WhatsApp o Asistencia"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.4 1.26-1.92 1.34-.5.08-1.15.11-3.69-.94-3.25-1.35-5.34-4.66-5.5-4.88-.16-.22-1.32-1.76-1.32-3.36 0-1.6 1.01-2.39 1.37-2.71.36-.32.78-.4 1.04-.4.26 0 .52.01.75.02.24.01.56-.09.87.66.32.77 1.09 2.66 1.18 2.86.09.2.15.44.03.68-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.01 2.51 1.38 1.23 2.54 1.61 2.9 1.79.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.32.12 2.04.96 2.39 1.14.35.18.58.27.67.42.09.15.09.87-.15 1.55z" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#09111c] text-slate-400 py-12 px-6 sm:px-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <IiniciaLogo size="sm" />
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Formación universitaria y certificaciones profesionales con flexibilidad 100% en
              línea.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-300">
            <button onClick={() => setCoursesModalOpen(true)} className="hover:text-white transition">
              Cursos y Carreras
            </button>
            <Link href="/login" className="hover:text-white transition">
              Acceso a Mi IINICIA
            </Link>
            <Link href="/registro" className="hover:text-white transition">
              Inscripciones
            </Link>
            <a
              href="http://localhost:8080"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Campus Virtual Moodle
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center md:text-right">
            &copy; 2026 IINICIA. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Course Catalog Modal */}
      <CoursesModal
        isOpen={coursesModalOpen}
        onClose={() => setCoursesModalOpen(false)}
      />
    </div>
  );
}
