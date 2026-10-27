import React from 'react';

interface IiniciaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function IiniciaLogo({ className = '', size = 'md' }: IiniciaLogoProps) {
  const iconSizes = {
    sm: 'w-10 h-7',
    md: 'w-14 h-9',
    lg: 'w-20 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
  };

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Icon: Infinity Loop with Nodes on Left and Smooth Gradient on Right */}
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 130 65"
          className={`${iconSizes[size]} text-white`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left loop: Constellation / network lines & nodes */}
          <path
            d="M 65 32.5 C 50 10, 20 10, 10 32.5 C 2 48, 15 58, 32.5 58 C 48 58, 55 45, 65 32.5"
            stroke="url(#blueGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Network nodes and interconnects */}
          <line x1="16" y1="24" x2="32" y2="16" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="32" y1="16" x2="48" y2="28" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="16" y1="24" x2="22" y2="44" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="22" y1="44" x2="42" y2="48" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="42" y1="48" x2="52" y2="34" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.8" />

          {/* Glowing node dots */}
          <circle cx="16" cy="24" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="32" cy="16" r="3.2" fill="#38bdf8" />
          <circle cx="48" cy="28" r="2.8" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="22" cy="44" r="3" fill="#38bdf8" />
          <circle cx="42" cy="48" r="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="52" cy="34" r="2.8" fill="#38bdf8" />

          {/* Right loop: Smooth solid gradient ribbon */}
          <path
            d="M 65 32.5 C 75 45, 82 58, 97.5 58 C 115 58, 128 48, 120 32.5 C 110 10, 80 10, 65 32.5 Z"
            stroke="#0066FF"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 68 34 C 77 47, 85 56, 97.5 56 C 113 56, 124 47, 117 33 C 108 12, 82 12, 68 34"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.6"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand Text: IINICIA with 2 superscript */}
      <div className="mt-0.5">
        <div className={`font-black tracking-tight text-white flex items-baseline leading-none ${titleSizes[size]}`}>
          <span>I</span>
          <span className="relative -top-1.5 text-[0.65em] font-bold text-sky-400">2</span>
          <span>NICIA</span>
        </div>
        <p className={`text-white/90 font-medium tracking-normal leading-tight mt-0.5 ${subtitleSizes[size]}`}>
          Instituto de Innovación
          <br />
          y Ciencias Aplicadas
        </p>
      </div>
    </div>
  );
}
