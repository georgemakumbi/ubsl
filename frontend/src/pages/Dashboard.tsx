import React from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ margin: 0, color: '#333' }}>UBSL Dashboard</h2>
        <div>
          <span style={{ marginRight: '1rem', color: '#555' }}>Welcome, <strong>{user?.name}</strong> ({user?.role})</span>
          <button onClick={handleLogout} style={{ padding: '0.4rem 0.8rem', cursor: 'pointer' }}>Logout</button>
        </div>
      </header>

      <nav style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <Link to="/dashboard/inventory" style={{ padding: '0.5rem 1rem', background: '#e9ecef', textDecoration: 'none', color: '#333', borderRadius: '4px' }}>Inventory & Products</Link>
        <Link to="/dashboard/sales" style={{ padding: '0.5rem 1rem', background: '#e9ecef', textDecoration: 'none', color: '#333', borderRadius: '4px' }}>Sales & Orders</Link>
        <Link to="/dashboard/service" style={{ padding: '0.5rem 1rem', background: '#e9ecef', textDecoration: 'none', color: '#333', borderRadius: '4px' }}>Service & Maintenance</Link>
        {user?.role === 'ADMIN' && <Link to="/dashboard/procurement" style={{ padding: '0.5rem 1rem', background: '#e9ecef', textDecoration: 'none', color: '#333', borderRadius: '4px' }}>Procurement</Link>}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
