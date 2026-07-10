import { NavLink, Outlet } from 'react-router-dom';
import { FaBell, FaBuilding, FaCarSide, FaChartPie, FaParking, FaUserCircle, FaUserTie } from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: FaChartPie },
  { label: 'Parking Slot Master', path: '/parking-slot-master', icon: FaParking },
  { label: 'Employee Master', path: '/employee-master', icon: FaUserTie },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-700 text-white">
              <FaCarSide className="text-xl" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-950">ParkWise PMS</p>
              <p className="text-xs font-medium text-slate-500">Enterprise Console</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`
                }
              >
                <item.icon className="text-lg" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="m-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <FaBuilding className="text-xl text-teal-700" />
              <div>
                <p className="text-sm font-bold text-slate-900">Tower A</p>
                <p className="text-xs text-slate-500">3 basements monitored</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-20 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700 text-white">
                <FaCarSide />
              </div>
              <div>
                <p className="font-bold text-slate-950">ParkWise PMS</p>
                <p className="text-xs text-slate-500">Enterprise Console</p>
              </div>
            </div>

            <nav className="flex gap-2 overflow-x-auto lg:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${
                      isActive ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`
                  }
                >
                  <item.icon />
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <p className="text-sm font-medium text-slate-500">Operations Overview</p>
              <p className="text-lg font-bold text-slate-950">Parking Management System</p>
            </div>

            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" aria-label="Notifications">
                <FaBell />
              </button>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <FaUserCircle className="text-2xl text-slate-400" />
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-slate-950">Admin User</p>
                  <p className="text-xs text-slate-500">Facility Manager</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
