export function getParkingStats(parkingSlots) {
  const availableSlots = parkingSlots.filter((slot) => slot.allocation === 'Available').length;
  const occupiedSlots = parkingSlots.filter((slot) => ['Allocated', 'Reserved'].includes(slot.allocation)).length;

  return {
    totalSlots: parkingSlots.length,
    availableSlots,
    occupiedSlots,
    employeeSlots: parkingSlots.filter((slot) => slot.parkingType === 'Employee').length,
    visitorSlots: parkingSlots.filter((slot) => slot.parkingType === 'Visitor').length,
    sedanSlots: parkingSlots.filter((slot) => slot.vehicleSlotType === 'Sedan').length,
    csuvSlots: parkingSlots.filter((slot) => slot.vehicleSlotType === 'CSUV').length,
    puzzleSlots: parkingSlots.filter((slot) => slot.basement === 'B2').length,
    stackSlots: parkingSlots.filter((slot) => slot.basement === 'B3').length,
    groundSlots: parkingSlots.filter((slot) => slot.basement === 'B1').length,
  };
}

export function getAllocationTone(allocation) {
  const tones = {
    Allocated: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    Available: 'bg-sky-50 text-sky-700 ring-sky-200',
    Reserved: 'bg-amber-50 text-amber-700 ring-amber-200',
    Maintenance: 'bg-rose-50 text-rose-700 ring-rose-200',
  };

  return tones[allocation] ?? 'bg-slate-50 text-slate-700 ring-slate-200';
}
