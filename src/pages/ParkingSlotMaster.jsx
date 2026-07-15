import { useMemo, useState } from 'react';
import { FaDownload, FaPlus, FaSearch } from 'react-icons/fa';
import PageHeader from '../components/ui/PageHeader.jsx';
import ParkingSlotTable from '../components/parking/ParkingSlotTable.jsx';
import SlotFormModal from '../components/SlotFormModal.jsx';
import {
  addParkingSlot,
  updateParkingSlot,
  useParkingStore,
} from '../utils/parkingStorage.js';

const tableColumns = [
  { label: 'Slot Number', key: 'slotNumber' },
  { label: 'Basement', key: 'basement' },
  { label: 'Parking Type', key: 'parkingType' },
  { label: 'Vehicle Type', key: 'vehicleSlotType' },
  { label: 'Allocation', key: 'allocation' },
  { label: 'Status', key: 'status' },
];

function downloadCsv(rows) {
  const header = tableColumns.map((column) => column.label);
  const csvRows = rows.map((slot) =>
    tableColumns.map((column) => {
      const value = String(slot[column.key] ?? '');
      return `"${value.replaceAll('"', '""')}"`;
    }).join(','),
  );
  const csvContent = [header.join(','), ...csvRows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = 'parking-slot-master.csv';
  link.click();
  URL.revokeObjectURL(url);
}

export default function ParkingSlotMaster() {
  const { slots } = useParkingStore();
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // null => "Add Parking Slot" mode; a slot object => "Edit Parking Slot" mode.
  const [editingSlot, setEditingSlot] = useState(null);

  const filteredSlots = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return slots;
    }

    return slots.filter((slot) => {
      const searchable = [
        slot.slotNumber,
        slot.basement,
        slot.parkingType,
        slot.vehicleSlotType,
        slot.allocation,
        slot.status,
      ].join(' ').toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [slots, query]);

  const hasSlotData = slots.length > 0;
  const hasFilteredData = filteredSlots.length > 0;

  const openAddModal = () => {
    setEditingSlot(null);
    setIsModalOpen(true);
  };

  const openEditModal = (slot) => {
    setEditingSlot(slot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSlot(null);
  };

  const handleSubmit = (formData) => {
    if (editingSlot) {
      updateParkingSlot(editingSlot.id, formData);
    } else {
      addParkingSlot(formData);
    }

    closeModal();
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Master Data"
        title="Parking Slot Master"
        description="Manage the complete parking slot inventory, including basement mapping, vehicle type compatibility, and slot allocation status."
        actions={
          <>
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!hasSlotData}
              onClick={() => downloadCsv(filteredSlots)}
              title={hasSlotData ? 'Export parking slot records' : 'No data available'}
              type="button"
            >
              <FaDownload />
              Export
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
              onClick={openAddModal}
              type="button"
            >
              <FaPlus />
              Add Parking Slot
            </button>
          </>
        }
      />

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-teal-600 focus-within:bg-white">
          <FaSearch className="shrink-0 text-slate-400" />
          <input
            className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none"
            placeholder="Search slot number, basement, parking type, vehicle type, allocation, status..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Parking Slot Records</h2>
              <p className="text-sm text-slate-500">
                {hasSlotData ? `${filteredSlots.length} records found` : 'No data available'}
              </p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              Browser localStorage
            </span>
          </div>
        </div>

        <ParkingSlotTable
          slots={filteredSlots}
          hasData={hasFilteredData}
          onEdit={openEditModal}
        />
      </section>

      <SlotFormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        slot={editingSlot}
      />
    </div>
  );
}
