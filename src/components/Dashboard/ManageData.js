import React, { useState } from 'react';

const ManageData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Sample Data 1' },
    { id: 2, name: 'Sample Data 2' },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1>Manage Data</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map((item) => (
          <li key={item.id} style={{ margin: '10px 0' }}>
            {item.name}
            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageData;
