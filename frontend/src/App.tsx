import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import ServiceJobs from './pages/ServiceJobs';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes - Dashboard wraps child pages via <Outlet /> */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route index element={<Navigate to="inventory" />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="service" element={<ServiceJobs />} />
          {/* Sales and Procurement placeholders */}
          <Route path="sales" element={<div><h3>Sales & Orders</h3><p>Coming soon.</p></div>} />
          <Route path="procurement" element={<div><h3>Procurement</h3><p>Coming soon.</p></div>} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
