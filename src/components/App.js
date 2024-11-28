import React, { useState } from 'react';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: true },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function App() {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState("all"); // Filter state
  const [searchQuery, setSearchQuery] = useState("");

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

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function handleClearAll() {
    setItems([]);
  }

  // Apply search and filter
  const filteredItems = items
    .filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) => {
      if (filter === "packed") return item.packed;
      if (filter === "unpacked") return !item.packed;
      return true;
    });

  return (
    <div className="app">
      <Logo />
      <Form
        onAddItems={handleAddItems}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onClearAll={handleClearAll}
      />
      <PackingList
        items={filteredItems}
        onDelete={handleDeleteItem}
        onUpdate={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
