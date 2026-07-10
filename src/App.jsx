import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EmployeeMaster from './pages/EmployeeMaster.jsx';
import Login from './pages/Login.jsx';
import ParkingSlotMaster from './pages/ParkingSlotMaster.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parking-slot-master" element={<ParkingSlotMaster />} />
        <Route path="/employee-master" element={<EmployeeMaster />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
