import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Products() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', quantity: 0, price: 0 });
  const [editItem, setEditItem] = useState(null);

  // Fetch all items
  useEffect(() => {
    axios.get('http://localhost:8080/dairyFarm/items')
      .then(response => setItems(response.data))
      .catch(error => console.log(error));
  }, []);

  // Handle create item
  const handleCreate = () => {
    axios.post('http://localhost:8080/dairyFarm/items', newItem)
      .then(response => {
        setItems([...items, response.data]);
        setNewItem({ name: '', description: '', quantity: 0, price: 0 });
      })
      .catch(error => console.log(error));
  };

  // Handle edit item
  const handleEdit = (item) => {
    setEditItem(item);
  };

  // Handle update item
  const handleUpdate = () => {
    axios.put(`http://localhost:8080/dairyFarm/items/${editItem.id}`, editItem)
      .then(response => {
        const updatedItems = items.map(item => item.id === editItem.id ? response.data : item);
        setItems(updatedItems);
        setEditItem(null);
      })
      .catch(error => console.log(error));
  };

  // Handle delete item
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/dairyFarm/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <h1>Inventory Management</h1>

      <div>
        <h2>Create Item</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Unit Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button onClick={handleCreate}>Create</button>
      </div>

      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description} - {item.quantity} - ${item.price}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editItem && (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
          <input
            type="text"
            value={editItem.description}
            onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
          />
          <input
            type="number"
            value={editItem.quantity}
            onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
          />
          <input
            type="number"
            value={editItem.price}
            onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}
