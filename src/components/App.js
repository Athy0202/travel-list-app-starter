import React, { useState } from 'react';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: true },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];
 
function Logo() {
  return <h1>My Travel List</h1>;
}
 
 
 
function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(newItem) {
    setItems(prevItems => [...prevItems, newItem]);
  }
  function handleDeleteItem(id) {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }
 
  function handleUpdateItem(id) {
    setItems(prevItems => prevItems.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} /> {/* Passing handleAddItem to Form */}
      <PackingList handleUpdateItem={handleUpdateItem} items={items} handleDeleteItem={handleDeleteItem} />
      <Stats items={items} />
    </div>
  );
}
 
export default App;