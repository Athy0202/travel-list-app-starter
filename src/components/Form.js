import React, { useState } from 'react';

function Form({ onAddItems, onFilterChange, onSearch, onClearAll }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || description.trim() === "") {
      alert("Please enter a valid description!");
      return;
    }

    const newItem = {
      id: Date.now(),
      description: description.trim(),
      quantity,
      packed: false,
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  function handleQuantityChange(e) {
    setQuantity(Number(e.target.value));
  }

  function handleSearchChange(e) {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  }

  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={handleQuantityChange}>
        {[1, 2, 3].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={onClearAll}>
        Clear All
      </button>

      {/* Search Bar */}
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search items"
        />
      </div>

      {/* Filter Dropdown */}
      <div>
        <label htmlFor="filter">Filter: </label>
        <select id="filter" onChange={handleFilterChange}>
          <option value="all">All Items</option>
          <option value="packed">Packed Items</option>
          <option value="unpacked">Unpacked Items</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
