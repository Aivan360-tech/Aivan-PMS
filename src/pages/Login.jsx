import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCarSide,
  FaDoorOpen,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaParking,
  FaShieldAlt,
  FaUserShield,
  FaVideo,
} from 'react-icons/fa';

// Decorative feature badges for the hero panel. Icons stand in for the
// physical facility features (CCTV, automated entry barrier, guidance
// signage) called out in the design brief.
const heroFeatures = [
  { label: '24/7 CCTV Monitoring', icon: FaVideo },
  { label: 'Automated Entry Barrier', icon: FaDoorOpen },
  { label: 'Smart Guidance Signage', icon: FaParking },
];


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Local keyframes for subtle, one-time entrance animations. Scoped
          via unique class names so nothing else on the page is affected. */}
      <style>{`
        @keyframes loginFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loginGlowPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.85; }
        }
        .login-fade-up { animation: loginFadeUp 0.6s ease-out both; }
        .login-fade-up-delay-1 { animation: loginFadeUp 0.6s ease-out 0.1s both; }
        .login-fade-up-delay-2 { animation: loginFadeUp 0.6s ease-out 0.2s both; }
        .login-glow-pulse { animation: loginGlowPulse 3.5s ease-in-out infinite; }
      `}</style>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[3fr_2fr]">
        {/* ============================================================
            LEFT — Hero panel (~60% on desktop, top banner on smaller
            screens)
        ============================================================ */}
        <section className="relative flex min-h-[300px] items-center overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#0d9488_55%,#1e293b_100%)] px-6 py-14 sm:px-10 lg:min-h-screen lg:px-16 lg:py-16">
          {/* Replaceable background layer. Swap in a real, licensed facility
              photo later by setting the --login-hero-image custom property
              (e.g. style={{ '--login-hero-image': 'url(/hero.jpg)' }})
              on this <section> — no code change required. Until then, the
              illustrated parking scene below fills that role. */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay"
            style={{ backgroundImage: 'var(--login-hero-image, none)' }}
            aria-hidden="true"
          />

          {/* Soft dot-grid texture */}
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#ffffff_0_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          {/* Ambient glow accents */}
          <div className="login-glow-pulse pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" aria-hidden="true" />

          {/* City skyline with lit windows */}
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-24 h-40 w-full opacity-40 sm:bottom-28 sm:h-52"
            viewBox="0 0 1600 240"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[
              { x: 0, w: 120, h: 130 },
              { x: 130, w: 80, h: 190 },
              { x: 220, w: 100, h: 100 },
              { x: 330, w: 70, h: 220 },
              { x: 410, w: 110, h: 150 },
              { x: 530, w: 90, h: 100 },
              { x: 630, w: 130, h: 200 },
              { x: 770, w: 80, h: 140 },
              { x: 860, w: 100, h: 180 },
              { x: 970, w: 120, h: 110 },
              { x: 1100, w: 90, h: 210 },
              { x: 1200, w: 110, h: 150 },
              { x: 1320, w: 80, h: 190 },
              { x: 1410, w: 100, h: 120 },
              { x: 1520, w: 80, h: 170 },
            ].map((building, index) => (
              <g key={index}>
                <rect
                  x={building.x}
                  y={240 - building.h}
                  width={building.w}
                  height={building.h}
                  fill="#e2e8f0"
                />
                {Array.from({ length: Math.floor(building.h / 26) }).map((_, row) => (
                  <g key={row}>
                    <rect x={building.x + building.w * 0.22} y={240 - building.h + 14 + row * 26} width="8" height="10" fill="#fde68a" fillOpacity="0.85" />
                    <rect x={building.x + building.w * 0.6} y={240 - building.h + 14 + row * 26} width="8" height="10" fill="#fde68a" fillOpacity="0.55" />
                  </g>
                ))}
              </g>
            ))}
          </svg>

          {/* Foreground parking facility scene: pavement, boom barrier,
              CCTV camera, guidance sign, parked cars, and trees. */}
          <svg
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full sm:h-32 lg:h-36"
            viewBox="0 0 1600 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Pavement */}
            <rect x="0" y="60" width="1600" height="160" fill="#0f172a" fillOpacity="0.35" />
            {[120, 320, 520, 720, 920, 1120, 1320, 1520].map((x) => (
              <line key={x} x1={x} y1="70" x2={x} y2="200" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="4" strokeDasharray="14 14" />
            ))}

            {/* Trees */}
            {[480, 980, 1460].map((x, index) => (
              <g key={index} transform={`translate(${x}, 118)`}>
                <rect x="-4" y="26" width="8" height="30" fill="#334155" />
                <circle cx="0" cy="14" r="26" fill="#059669" fillOpacity="0.9" />
                <circle cx="-16" cy="26" r="18" fill="#10b981" fillOpacity="0.85" />
                <circle cx="16" cy="26" r="18" fill="#10b981" fillOpacity="0.85" />
              </g>
            ))}

            {/* Boom barrier (open position) */}
            <g transform="translate(90, 60)">
              <rect x="-6" y="0" width="14" height="110" rx="3" fill="#f8fafc" />
              <rect x="-16" y="104" width="34" height="12" rx="2" fill="#0f172a" fillOpacity="0.5" />
              <g transform="rotate(-58)">
                <rect x="0" y="-6" width="150" height="12" rx="4" fill="#f8fafc" />
                {[0, 24, 48, 72, 96, 120].map((offset) => (
                  <rect key={offset} x={offset} y="-6" width="12" height="12" fill="#facc15" />
                ))}
                <circle cx="150" cy="0" r="7" fill="#ef4444" />
              </g>
            </g>

            {/* Parking guidance sign */}
            <g transform="translate(230, 44)">
              <rect x="-3" y="20" width="6" height="90" fill="#cbd5e1" />
              <rect x="-38" y="0" width="76" height="46" rx="6" fill="#f8fafc" stroke="#0f766e" strokeWidth="3" />
              <text x="0" y="24" textAnchor="middle" fontSize="24" fontWeight="700" fill="#0f766e" fontFamily="sans-serif">P</text>
              <path d="M -22 36 L -6 36 L -14 44 Z" fill="#0f766e" />
            </g>

            {/* CCTV camera on pole */}
            <g transform="translate(1360, 30)">
              <rect x="-3" y="10" width="6" height="80" fill="#cbd5e1" />
              <g transform="translate(0, 6) rotate(18)">
                <rect x="-8" y="-10" width="46" height="20" rx="6" fill="#e2e8f0" />
                <circle cx="34" cy="0" r="7" fill="#0f172a" />
                <circle cx="34" cy="0" r="3" fill="#38bdf8" />
              </g>
              <circle cx="-3" cy="8" r="5" className="login-glow-pulse" fill="#ef4444" />
            </g>

            {/* Parked cars (side profile), reused via <use> with per-car fill */}
            <defs>
              <g id="loginHeroCar">
                <rect x="0" y="18" width="150" height="26" rx="10" />
                <path d="M18 18 L34 0 H108 L128 18 Z" />
                <circle cx="30" cy="46" r="12" fill="#0f172a" fillOpacity="0.75" />
                <circle cx="120" cy="46" r="12" fill="#0f172a" fillOpacity="0.75" />
              </g>
            </defs>
            {[
              { x: 360, fill: '#f8fafc', opacity: 0.92 },
              { x: 610, fill: '#94a3b8', opacity: 0.85 },
              { x: 860, fill: '#2dd4bf', opacity: 0.8 },
              { x: 1110, fill: '#e2e8f0', opacity: 0.85 },
            ].map(({ x, fill, opacity }, index) => (
              <use key={index} href="#loginHeroCar" x={x} y="150" fill={fill} fillOpacity={opacity} />
            ))}
          </svg>

          {/* Soft dark overlay for text legibility over the scene */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" aria-hidden="true" />

          <div className="relative w-full max-w-2xl">
            <div className="login-fade-up flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-teal-700 shadow-lg">
                <FaCarSide className="text-2xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight tracking-normal sm:text-2xl">Parking Management System</h1>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">Smart Enterprise Parking Solution</p>
              </div>
            </div>

            <div className="login-fade-up-delay-1 mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {heroFeatures.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-teal-200">
                    <Icon className="text-base" />
                  </div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            RIGHT — Login card (~40% on desktop)
        ============================================================ */}
        <section className="flex items-center justify-center bg-slate-50 px-6 py-12 text-slate-900">
          <div className="login-fade-up-delay-2 w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl sm:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-900/20">
                <FaShieldAlt className="text-2xl" />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Secure Access</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Welcome Back!</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Sign in to continue to your dashboard.</p>
            </div>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Username</span>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 transition duration-200 focus-within:border-teal-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-100">
                  <FaUserShield className="text-slate-400" />
                  <input className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none" defaultValue="admin@parkwise.com" />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Password</span>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 transition duration-200 focus-within:border-teal-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-100">
                  <FaLock className="text-slate-400" />
                  <input
                    className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none"
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="parking123"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="shrink-0 text-slate-400 transition hover:text-teal-700"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center gap-2 font-medium text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 accent-teal-700"
                  />
                  Remember me
                </label>
                <button type="button" className="font-semibold text-teal-700 transition hover:text-teal-800 hover:underline">
                  Forgot password?
                </button>
              </div>

              <Link
                to="/dashboard"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-700 to-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/20"
              >
                Login to Dashboard
                <FaArrowRight />
              </Link>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
