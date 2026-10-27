'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import IiniciaLogo from '@/components/IiniciaLogo';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 bg-slate-950 text-slate-900 selection:bg-blue-600 selection:text-white overflow-hidden">
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

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[440px] bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-black/50 border border-blue-100/50 animate-in fade-in zoom-in-95 duration-200 mt-16 sm:mt-0">
        {/* Header inside card */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Portal Estudiantil
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0e1f38] tracking-tight">
            Acceso a Mi IINICIA
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
            Ingresa con tu correo institucional para acceder a tus cursos y campus virtual.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
            <span className="text-base leading-none">⚠️</span>
            <p className="flex-1 font-medium">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Correo electrónico
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                ✉️
              </span>
              <input
                type="email"
                placeholder="ejemplo@iinicia.org"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                placeholder="Tu contraseña institucional"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder-slate-400 text-sm rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none"
              />
            </div>
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
                <span>Iniciando sesión...</span>
              </>
            ) : (
              <span>INICIAR SESIÓN</span>
            )}
          </button>
        </form>

        {/* Divider & Links */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center space-y-3">
          <p className="text-xs text-slate-500">
            ¿Aún no tienes cuenta institucional?{' '}
            <Link href="/registro" className="text-[#0066FF] font-bold hover:underline">
              Crear mi cuenta
            </Link>
          </p>
          <div>
            <a
              href="http://localhost:8080"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition"
            >
              <span>Ir directamente a Campus LMS Moodle</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}