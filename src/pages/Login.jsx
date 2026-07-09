import { Link } from 'react-router-dom';
import { FaArrowRight, FaCarSide, FaLock, FaUserShield } from 'react-icons/fa';

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative flex items-center overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#0d9488_52%,#334155_100%)] px-6 py-12 sm:px-10 lg:px-16">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#ffffff_0_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>
          <div className="relative max-w-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-teal-700 shadow-lg">
              <FaCarSide className="text-2xl" />
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-normal sm:text-5xl">Parking Management System</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100">
              Monitor slot inventory, allocation status, basement utilization, vehicle classes, and puzzle parking operations from one responsive console.
            </p>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              {['Live Slots', 'Puzzle Parking', 'Visitor Access'].map((label) => (
                <div key={label} className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-slate-50 px-6 py-12 text-slate-900">
          <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Secure Login</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">Welcome back</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Use the demo access panel to enter the PMS dashboard.</p>
            </div>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Username</span>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-teal-600 focus-within:bg-white">
                  <FaUserShield className="text-slate-400" />
                  <input className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none" defaultValue="admin@parkwise.com" />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Password</span>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-teal-600 focus-within:bg-white">
                  <FaLock className="text-slate-400" />
                  <input className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none" type="password" defaultValue="parking123" />
                </div>
              </label>

              <Link
                to="/dashboard"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
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
