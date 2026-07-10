import { MdDirectionsCar, MdVideocam } from 'react-icons/md'
import { getAllocationColor, getParkingTypeColor } from '../utils/helpers'

export default function ParkingSlotCard({ slot }) {
  const allocationStyle = getAllocationColor(slot.allocation)
  const parkingTypeStyle = getParkingTypeColor(slot.parkingType)
  const isVacant = slot.allocation === 'Vacant'

  return (
    <div
      className={`card group relative overflow-hidden p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        isVacant ? 'ring-1 ring-teal-200' : ''
      }`}
    >
      {/* Status stripe */}
      <div className={`absolute inset-x-0 top-0 h-1 ${allocationStyle.dot}`} />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-navy-400">{slot.basement}</p>
          <p className="text-lg font-bold text-navy-900">{slot.slotNumber}</p>
        </div>
        <span className={`badge ${allocationStyle.bg} ${allocationStyle.text}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${allocationStyle.dot}`} />
          {slot.allocation}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-navy-50 pt-3">
        <div className="flex items-center gap-1.5 text-sm text-navy-600">
          <MdDirectionsCar className="h-4 w-4 text-navy-400" />
          {slot.vehicleSlotType}
        </div>
        <span className={`badge ${parkingTypeStyle}`}>{slot.parkingType}</span>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-navy-400">
        <MdVideocam className="h-3.5 w-3.5" />
        {slot.cameraNumber}
      </div>
    </div>
  )
}
