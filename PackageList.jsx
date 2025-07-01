import React, { useState } from 'react';

const PackingList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (!newItem.trim()) return;

    const item = {
      id: Date.now(),
      name: newItem.trim(),
      isPacked: false,
    };
    setItems([...items, item]);
    setNewItem('');
  };

  const handleTogglePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => handleTogglePacked(item.id)}
              style={{
                textDecoration: item.isPacked ? 'line-through' : 'none',
                cursor: 'pointer',
                color: item.isPacked ? 'green' : 'black',
                marginRight: '10px',
              }}
            >
              {item.isPacked ? '✔️' : '☐'} {item.name}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;