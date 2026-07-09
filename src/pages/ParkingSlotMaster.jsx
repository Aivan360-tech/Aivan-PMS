import { useMemo, useState } from 'react';
import { FaDownload, FaFilter, FaSearch } from 'react-icons/fa';
import parkingData from '../data/parkingData.json';
import ParkingSlotCard from '../components/parking/ParkingSlotCard.jsx';
import ParkingSlotTable from '../components/parking/ParkingSlotTable.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function ParkingSlotMaster() {
  const [query, setQuery] = useState('');
  const [parkingType, setParkingType] = useState('All');

  const filteredSlots = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return parkingData.filter((slot) => {
      const matchesType = parkingType === 'All' || slot.parkingType === parkingType;
      const searchable = [
        slot.basement,
        slot.cameraNumber,
        slot.puzzleNumber,
        slot.slotNumber,
        slot.vehicleSlotType,
        slot.parkingType,
        slot.height,
        slot.allocation,
      ].join(' ').toLowerCase();

      return matchesType && searchable.includes(normalizedQuery);
    });
  }, [parkingType, query]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Master Data"
        title="Parking Slot Master"
        description="Maintain a clear operational list of basement slots, puzzle numbers, camera mappings, allocation status, height limits, and parking categories."
        actions={
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50">
            <FaDownload />
            Export
          </button>
        }
      />

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[1fr_220px]">
          <label className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-teal-600 focus-within:bg-white">
            <FaSearch className="shrink-0 text-slate-400" />
            <input
              className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none"
              placeholder="Search basement, camera, puzzle, slot, type, allocation..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
            <FaFilter className="shrink-0 text-slate-400" />
            <select
              className="w-full border-0 bg-transparent text-sm font-semibold text-slate-700 outline-none"
              value={parkingType}
              onChange={(event) => setParkingType(event.target.value)}
            >
              <option>All</option>
              <option>Employee</option>
              <option>Visitor</option>
            </select>
          </label>
        </div>
      </section>

      <section className="hidden lg:block">
        <ParkingSlotTable slots={filteredSlots} />
      </section>

      <section className="lg:hidden">
        <h2 className="mb-3 text-base font-bold text-slate-950">Mobile Slot Cards</h2>
        <div className="grid gap-4">
          {filteredSlots.map((slot) => (
            <ParkingSlotCard key={slot.id} slot={slot} />
          ))}
        </div>
      </section>
    </div>
  );
}
