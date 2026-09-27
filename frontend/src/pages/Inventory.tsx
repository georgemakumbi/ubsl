import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface InventoryItem {
  id: number;
  quantity: number;
  product: {
    name: string;
    sku: string;
    trackingType: string;
    reorderLevel: number;
  };
  location: {
    name: string;
    type: string;
  };
}

const Inventory = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await api.get('/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  const isLowStock = (quantity: number, reorderLevel: number) => {
    return quantity <= reorderLevel;
  };

  if (loading) return <div>Loading inventory data...</div>;

  return (
    <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3>Current Stock Levels</h3>
        <button style={{ padding: '0.5rem 1rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          + Adjust Stock
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #eee', color: '#555' }}>
            <th style={{ padding: '0.75rem' }}>SKU</th>
            <th style={{ padding: '0.75rem' }}>Product Name</th>
            <th style={{ padding: '0.75rem' }}>Location</th>
            <th style={{ padding: '0.75rem' }}>Type</th>
            <th style={{ padding: '0.75rem' }}>Quantity</th>
            <th style={{ padding: '0.75rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>No inventory records found.</td>
            </tr>
          ) : (
            inventory.map((item) => {
              const lowStock = isLowStock(item.quantity, item.product.reorderLevel);
              return (
                <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{item.product.sku}</td>
                  <td style={{ padding: '0.75rem' }}>{item.product.name}</td>
                  <td style={{ padding: '0.75rem' }}>{item.location.name}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', padding: '0.2rem 0.5rem', background: '#e9ecef', borderRadius: '4px' }}>
                      {item.product.trackingType}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{item.quantity}</td>
                  <td style={{ padding: '0.75rem' }}>
                    {lowStock ? (
                      <span style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '0.9rem' }}>Low Stock</span>
                    ) : (
                      <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '0.9rem' }}>Healthy</span>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
