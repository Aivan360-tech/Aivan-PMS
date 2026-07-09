import { FaCamera, FaCarSide, FaLayerGroup, FaRulerVertical } from 'react-icons/fa';
import StatusBadge from '../ui/StatusBadge.jsx';

export default function ParkingSlotCard({ slot }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{slot.basement}</p>
          <h3 className="mt-1 text-lg font-bold text-slate-950">{slot.slotNumber}</h3>
        </div>
        <StatusBadge value={slot.allocation} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <FaCamera className="text-teal-700" />
          <span>{slot.cameraNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaLayerGroup className="text-indigo-600" />
          <span>{slot.puzzleNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCarSide className="text-slate-700" />
          <span>{slot.vehicleSlotType}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRulerVertical className="text-amber-600" />
          <span>{slot.height}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-sm">
        <span className="font-medium text-slate-500">Parking Type</span>
        <span className="font-semibold text-slate-900">{slot.parkingType}</span>
      </div>
    </article>
  );
}
