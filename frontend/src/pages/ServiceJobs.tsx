import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface ServiceJob {
  id: number;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  reportedIssue: string;
  resolutionNotes: string | null;
  createdAt: string;
  resolvedAt: string | null;
  customer: {
    name: string;
  };
  serialisedUnit: {
    serialNumber: string;
    product: {
      name: string;
    };
  };
  technician: {
    name: string;
  };
}

const statusColors: Record<string, string> = {
  OPEN: '#dc3545',
  IN_PROGRESS: '#fd7e14',
  RESOLVED: '#28a745',
};

const ServiceJobs = () => {
  const [jobs, setJobs] = useState<ServiceJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    fetchJobs();
  }, [statusFilter]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const params = statusFilter ? { status: statusFilter } : {};
      const response = await api.get('/service-jobs', { params });
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching service jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading service jobs...</div>;

  return (
    <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0 }}>Service & Maintenance Jobs</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">All Statuses</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESOLVED">Resolved</option>
          </select>
          <button style={{ padding: '0.5rem 1rem', background: '#0056b3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            + New Job
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        {['OPEN', 'IN_PROGRESS', 'RESOLVED'].map((s) => {
          const count = jobs.filter((j) => j.status === s).length;
          return (
            <div key={s} style={{ flex: 1, padding: '1rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: `4px solid ${statusColors[s]}` }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: statusColors[s] }}>{count}</div>
              <div style={{ color: '#555', fontSize: '0.9rem', marginTop: '0.2rem' }}>{s.replace('_', ' ')}</div>
            </div>
          );
        })}
      </div>

      {/* Job Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #eee', color: '#555' }}>
            <th style={{ padding: '0.75rem' }}>ID</th>
            <th style={{ padding: '0.75rem' }}>Customer</th>
            <th style={{ padding: '0.75rem' }}>Unit (S/N)</th>
            <th style={{ padding: '0.75rem' }}>Issue</th>
            <th style={{ padding: '0.75rem' }}>Technician</th>
            <th style={{ padding: '0.75rem' }}>Date Opened</th>
            <th style={{ padding: '0.75rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No service jobs found.</td>
            </tr>
          ) : (
            jobs.map((job) => (
              <tr key={job.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem', color: '#888', fontWeight: 'bold' }}>#{job.id}</td>
                <td style={{ padding: '0.75rem' }}>{job.customer.name}</td>
                <td style={{ padding: '0.75rem' }}>
                  <div style={{ fontWeight: 'bold' }}>{job.serialisedUnit.product.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#888' }}>S/N: {job.serialisedUnit.serialNumber}</div>
                </td>
                <td style={{ padding: '0.75rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {job.reportedIssue}
                </td>
                <td style={{ padding: '0.75rem' }}>{job.technician.name}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.9rem', color: '#555' }}>
                  {new Date(job.createdAt).toLocaleDateString()}
                </td>
                <td style={{ padding: '0.75rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    background: statusColors[job.status]
                  }}>
                    {job.status.replace('_', ' ')}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceJobs;
