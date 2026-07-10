import { useState, useEffect, useCallback } from 'react'
import parkingDataSeed from '../data/parkingData.json'

const STORAGE_KEY = 'pms_parking_data'

function loadInitialData() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return parkingDataSeed
    }
  }
  return parkingDataSeed
}

/**
 * Central data hook for the Parking Slot Master.
 * Since there is no backend/database, all CRUD operations are performed
 * in-memory and persisted to localStorage so changes survive a refresh.
 */
export function useParkingData() {
  const [data, setData] = useState(loadInitialData)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const addSlot = useCallback((slot) => {
    setData((prev) => {
      const nextSrNo = prev.length ? Math.max(...prev.map((d) => d.srNo)) + 1 : 1
      return [...prev, { ...slot, srNo: nextSrNo }]
    })
  }, [])

  const updateSlot = useCallback((srNo, updatedSlot) => {
    setData((prev) => prev.map((d) => (d.srNo === srNo ? { ...d, ...updatedSlot, srNo } : d)))
  }, [])

  const deleteSlot = useCallback((srNo) => {
    setData((prev) => prev.filter((d) => d.srNo !== srNo))
  }, [])

  const resetToSeed = useCallback(() => {
    setData(parkingDataSeed)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return { data, addSlot, updateSlot, deleteSlot, resetToSeed }
}
