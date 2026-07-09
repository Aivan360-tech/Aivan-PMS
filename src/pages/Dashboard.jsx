import { FaCarAlt, FaCarSide, FaLayerGroup, FaParking, FaUserTie, FaUsers } from 'react-icons/fa';
import parkingData from '../data/parkingData.json';
import ParkingSlotCard from '../components/parking/ParkingSlotCard.jsx';
import MetricCard from '../components/ui/MetricCard.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import { getParkingStats } from '../utils/parkingStats.js';

export default function Dashboard() {
  const stats = getParkingStats(parkingData);

  const metrics = [
    { title: 'Total Slots', value: stats.totalSlots, icon: FaParking, accent: 'bg-teal-50 text-teal-700', note: 'Complete parking inventory' },
    { title: 'Employee Slots', value: stats.employeeSlots, icon: FaUserTie, accent: 'bg-indigo-50 text-indigo-700', note: 'Assigned for employees' },
    { title: 'Visitor Slots', value: stats.visitorSlots, icon: FaUsers, accent: 'bg-sky-50 text-sky-700', note: 'Reserved for visitors' },
    { title: 'Sedan Slots', value: stats.sedanSlots, icon: FaCarAlt, accent: 'bg-amber-50 text-amber-700', note: 'Sedan-compatible bays' },
    { title: 'CSUV Slots', value: stats.csuvSlots, icon: FaCarSide, accent: 'bg-rose-50 text-rose-700', note: 'Compact SUV capacity' },
    { title: 'Puzzle Slots', value: stats.puzzleSlots, icon: FaLayerGroup, accent: 'bg-slate-100 text-slate-700', note: 'Active puzzle systems' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Dashboard"
        title="Parking Operations Command Center"
        description="Track basement capacity, slot allocation, vehicle categories, and puzzle parking systems in a consolidated enterprise view."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Live Slot Cards</h2>
              <p className="text-sm text-slate-500">Generated dynamically from local JSON data.</p>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-bold text-teal-700">{parkingData.length} slots</span>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {parkingData.map((slot) => (
              <ParkingSlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Allocation Summary</h2>
            <div className="mt-5 space-y-4">
              {['Allocated', 'Available', 'Reserved', 'Maintenance'].map((status) => {
                const count = parkingData.filter((slot) => slot.allocation === status).length;
                const percentage = Math.round((count / parkingData.length) * 100);
                return (
                  <div key={status}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-600">{status}</span>
                      <span className="font-bold text-slate-950">{count}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-teal-700" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
            <p className="text-sm font-semibold text-teal-200">System Health</p>
            <p className="mt-3 text-3xl font-bold">98.7%</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Camera feeds, puzzle controllers, and allocation records are operating within expected range.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
