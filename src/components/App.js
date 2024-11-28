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
  const [sortOrder, setSortOrder] = useState('input');
  const [searchQuery, setSearchQuery] = useState('');
 
  function handleAddItems(item) {
    setItems((prevItems) => [item, ...prevItems]);
  }
 
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
 
  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
 
  function handleSortItems(order) {
    setSortOrder(order);
  }
 
  function handleSearch(query) {
    setSearchQuery(query); // Update search query
  }
 
  // First, filter the items based on the search query
  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  // Then, sort the filtered items based on the selected sortOrder
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortOrder) {
      case 'input': // Sort by input order (by ID)
        return a.id - b.id;
      case 'description': // Sort by description alphabetically
        return a.description.localeCompare(b.description);
      case 'packed': // Sort by packed status
        return a.packed === b.packed ? 0 : a.packed ? 1 : -1;
      default:
        return 0;
    }
  });
 
  function handleClearItems() {
    setItems([]); // Clear the list
  }
 
  return (
    <div className="app">
      <Logo />
      <Form
        onAddItems={handleAddItems}
        sortOrder={sortOrder}
        onSort={handleSortItems}
        onClearItems={handleClearItems}
        onSearch={handleSearch}
      />
      <PackingList items={sortedItems} onDelete={handleDeleteItem} onUpdate={handleUpdateItem} />
      <Stats items={items} />
    </div>
  );
}
 
export default App;
 