'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import IiniciaLogo from '@/components/IiniciaLogo';

export default function RegistroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    setLoading(true);
    setStatus('Procesando inscripción y vinculando perfil con Moodle LMS...');
    try {
      await axios.post('http://localhost:4000/api/auth/register', formData);
      setStatus('¡Registro exitoso! Redirigiendo a tu acceso...');
      setTimeout(() => router.push('/login'), 1500);
    } catch (err: any) {
      setIsError(true);
      setStatus(err.response?.data?.message || 'Error en el registro. Verifica los datos ingresados.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 bg-slate-950 text-slate-900 selection:bg-blue-600 selection:text-white overflow-hidden py-16">
      {/* Background with moody photography & deep navy gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Campus IINICIA"
          fill
          priority
          className="object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-[#0a111a]/95 to-slate-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0066ff22,transparent_70%)]" />
      </div>

      {/* Top Bar with Logo and Back Link */}
      <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 flex items-center justify-between z-20 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-90 transition">
          <IiniciaLogo size="sm" />
        </Link>
        <Link
          href="/"
          className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
        >
          <span>&larr;</span> Volver al inicio
        </Link>
      </div>

      {/* Registration Card */}
      <div className="relative z-10 w-full max-w-[500px] bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-black/50 border border-blue-100/50 animate-in fade-in zoom-in-95 duration-200 mt-14 sm:mt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Inscripción Abierta 2026
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0e1f38] tracking-tight">
            Registro IINICIA
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
            Crea tu perfil institucional para acceder al catálogo y matricularte en tus materias.
          </p>
        </div>

        {/* Status / Error Banner */}
        {status && (
          <div
            className={`mb-6 p-4 rounded-2xl text-xs sm:text-sm flex items-start gap-2.5 ${
              isError
                ? 'bg-red-50 border border-red-200 text-red-700'
                : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
            }`}
          >
            <span className="text-base leading-none">{isError ? '⚠️' : '✓'}</span>
            <p className="flex-1 font-medium">{status}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Ej. Juan"
                required
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 text-sm rounded-2xl px-4 py-3.5 transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Apellidos
              </label>
              <input
                type="text"
                placeholder="Ej. Pérez"
                required
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 text-sm rounded-2xl px-4 py-3.5 transition-all outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Correo institucional o personal
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                ✉️
              </span>
              <input
                type="email"
                placeholder="estudiante@iinicia.org"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 text-sm rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Contraseña
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[11px] font-semibold text-[#0066FF] hover:underline"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                🔒
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Crea una contraseña segura"
                required
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 text-sm rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none"
              />
            </div>
          </div>

          {/* Moodle Info Badge */}
          <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-100 flex items-center gap-2.5 text-xs text-blue-900">
            <span className="text-sm">🎓</span>
            <p>Tu cuenta se sincronizará automáticamente con el Campus Moodle 8.2.</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-full bg-[#0066FF] hover:bg-[#0055d4] active:scale-[0.98] transition-all text-white font-bold tracking-wider uppercase text-sm py-3.5 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Procesando...</span>
              </>
            ) : (
              <span>REGISTRARME</span>
            )}
          </button>
        </form>

        {/* Divider & Links */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            ¿Ya tienes una cuenta registrada?{' '}
            <Link href="/login" className="text-[#0066FF] font-bold hover:underline">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}