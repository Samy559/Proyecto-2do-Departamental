import React from 'react';

export default function WhyChooseUsIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 380 440"
        className="w-full max-w-[340px] sm:max-w-[380px] h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Gear 1 (Upper Left) */}
        <g stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="178" cy="115" r="18" />
          <path d="M178 90 v6 M178 134 v6 M153 115 h6 M197 115 h6 M160 97 l4 4 M192 129 l4 4 M160 133 l4 -4 M192 101 l4 -4" />
          <circle cx="178" cy="115" r="26" strokeDasharray="6 4" strokeWidth="1.5" />
        </g>

        {/* Background Gear 2 (Lower Right) */}
        <g stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="300" cy="350" r="22" />
          <path d="M300 320 v8 M300 372 v8 M270 350 h8 M322 350 h8 M279 329 l6 6 M315 365 l6 6 M279 371 l6 -6 M315 335 l6 -6" />
          <circle cx="300" cy="350" r="32" strokeDasharray="8 5" strokeWidth="1.5" />
        </g>

        {/* Decorative Sparkles & Dots */}
        <g stroke="#64748b" strokeWidth="1.5" strokeLinecap="round">
          {/* Sparkle top left */}
          <path d="M165 170 v6 M162 173 h6" />
          <circle cx="160" cy="195" r="1.5" fill="#64748b" />
          {/* Sparkle right */}
          <path d="M320 270 v6 M317 273 h6" />
          <circle cx="314" cy="298" r="1.5" fill="#64748b" />
        </g>

        {/* Smartphone Mockup */}
        <g id="smartphone">
          {/* Shadow */}
          <rect
            x="195"
            y="75"
            width="102"
            height="295"
            rx="18"
            fill="#dbeafe"
            fillOpacity="0.5"
          />
          {/* Outer Phone Frame */}
          <rect
            x="190"
            y="70"
            width="98"
            height="290"
            rx="16"
            fill="#ffffff"
            stroke="#1e3a5f"
            strokeWidth="2.2"
          />
          {/* Top Camera Dot */}
          <circle cx="239" cy="80" r="2.5" fill="#1e3a5f" />

          {/* Screen Content Blocks */}
          {/* Header block */}
          <rect x="198" y="90" width="82" height="24" rx="4" fill="#93c5fd" />
          {/* Top app banner / card */}
          <rect x="198" y="122" width="82" height="85" rx="5" fill="#bfdbfe" fillOpacity="0.75" />
          {/* Inner card wireframe lines */}
          <rect x="204" y="130" width="45" height="5" rx="2" fill="#ffffff" />
          <rect x="204" y="140" width="70" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.8" />
          <rect x="204" y="147" width="55" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.8" />

          {/* Bottom Card Block */}
          <rect x="198" y="278" width="82" height="68" rx="5" fill="#bfdbfe" fillOpacity="0.75" />
          <rect x="204" y="286" width="38" height="4" rx="2" fill="#ffffff" />
          <rect x="204" y="295" width="70" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.8" />
          <rect x="204" y="302" width="58" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.8" />
        </g>

        {/* Floating Star Rating Card (Overlapping Phone) */}
        <g id="rating-card" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))">
          <rect
            x="218"
            y="214"
            width="108"
            height="46"
            rx="10"
            fill="#ffffff"
            stroke="#1e3a5f"
            strokeWidth="2"
          />
          {/* 5 Golden Stars */}
          <g fill="#f59e0b">
            {/* Star 1 */}
            <path d="M232 237 l3.5 -2.5 l3.5 2.5 l-1.3 -4.2 l3.5 -2.5 h-4.4 l-1.3 -4.2 l-1.3 4.2 h-4.4 l3.5 2.5 z" />
            {/* Star 2 */}
            <path d="M252 237 l3.5 -2.5 l3.5 2.5 l-1.3 -4.2 l3.5 -2.5 h-4.4 l-1.3 -4.2 l-1.3 4.2 h-4.4 l3.5 2.5 z" />
            {/* Star 3 */}
            <path d="M272 237 l3.5 -2.5 l3.5 2.5 l-1.3 -4.2 l3.5 -2.5 h-4.4 l-1.3 -4.2 l-1.3 4.2 h-4.4 l3.5 2.5 z" />
            {/* Star 4 */}
            <path d="M292 237 l3.5 -2.5 l3.5 2.5 l-1.3 -4.2 l3.5 -2.5 h-4.4 l-1.3 -4.2 l-1.3 4.2 h-4.4 l3.5 2.5 z" />
            {/* Star 5 */}
            <path d="M312 237 l3.5 -2.5 l3.5 2.5 l-1.3 -4.2 l3.5 -2.5 h-4.4 l-1.3 -4.2 l-1.3 4.2 h-4.4 l3.5 2.5 z" />
          </g>
        </g>

        {/* Character / Student Figure */}
        <g id="student-figure">
          {/* Legs & Pants (Vivid Royal Blue) */}
          {/* Left leg */}
          <path
            d="M160 305 L160 380 L168 380 L170 305 Z"
            fill="#2563eb"
            stroke="#1e293b"
            strokeWidth="1.8"
          />
          {/* Right leg */}
          <path
            d="M176 305 L182 380 L190 380 L186 305 Z"
            fill="#2563eb"
            stroke="#1e293b"
            strokeWidth="1.8"
          />

          {/* Left Shoe */}
          <path
            d="M158 380 h16 c2 0 3 1.5 3 4 v3 h-22 v-4 c0 -1.8 1.2 -3 3 -3 z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="1.8"
          />
          <line x1="155" y1="387" x2="177" y2="387" stroke="#1e293b" strokeWidth="2" />
          <line x1="165" y1="380" x2="167" y2="384" stroke="#1e293b" strokeWidth="1" />

          {/* Right Shoe */}
          <path
            d="M180 380 h17 c2 0 3 1.5 3 4 v3 h-23 v-4 c0 -1.8 1.2 -3 3 -3 z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="1.8"
          />
          <line x1="177" y1="387" x2="200" y2="387" stroke="#1e293b" strokeWidth="2" />
          <line x1="187" y1="380" x2="189" y2="384" stroke="#1e293b" strokeWidth="1" />

          {/* Torso & Shirt (Dark Navy) */}
          <path
            d="M153 234 Q171 228 189 234 L200 286 L150 286 Z"
            fill="#0f172a"
            stroke="#0f172a"
            strokeWidth="1.5"
          />
          {/* Shirt fold & waist */}
          <path d="M150 286 L157 312 L193 312 L200 286 Z" fill="#0f172a" stroke="#0f172a" strokeWidth="1" />

          {/* Clipboard / Folder (Held in Hands) */}
          <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.1))">
            <rect
              x="172"
              y="252"
              width="30"
              height="38"
              rx="3"
              fill="#bfdbfe"
              stroke="#1e3a5f"
              strokeWidth="1.8"
              transform="rotate(6 172 252)"
            />
            {/* Clip at top */}
            <rect
              x="180"
              y="248"
              width="12"
              height="4"
              rx="1.5"
              fill="#64748b"
              transform="rotate(6 180 248)"
            />
            {/* Content line */}
            <line x1="176" y1="262" x2="194" y2="264" stroke="#1e3a5f" strokeWidth="1.5" />
            <line x1="176" y1="268" x2="190" y2="270" stroke="#1e3a5f" strokeWidth="1.2" />
          </g>

          {/* Arms (Skin Outline & T-shirt Sleeves) */}
          {/* Left sleeve */}
          <path d="M155 236 L151 262 L163 260 L166 238 Z" fill="#0f172a" stroke="#0f172a" strokeWidth="1.2" />
          {/* Left forearm */}
          <path d="M152 260 L168 280 L174 274 L161 258 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />

          {/* Right sleeve */}
          <path d="M187 236 L195 260 L205 256 L197 236 Z" fill="#0f172a" stroke="#0f172a" strokeWidth="1.2" />
          {/* Right forearm */}
          <path d="M198 258 L190 280 L182 276 L192 255 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="1.8" />

          {/* Neck */}
          <rect x="169" y="217" width="8" height="15" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />

          {/* Head & Face */}
          <path
            d="M166 202 C166 195 171 190 178 190 C185 190 190 195 190 203 C190 213 184 220 178 220 C171 220 166 213 166 202 Z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="1.8"
          />

          {/* Hair (Messy dark tufts) */}
          <path
            d="M164 200 C162 190 170 180 180 180 C187 180 192 184 193 189 C196 191 196 196 194 200 C191 198 189 199 187 197 C184 195 180 197 177 195 C173 197 169 196 167 202 Z"
            fill="#0f172a"
          />
          {/* Small hair strands */}
          <path d="M178 178 Q182 172 186 177" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M170 181 Q168 175 174 177" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
