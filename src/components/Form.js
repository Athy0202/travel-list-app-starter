import React, { useState } from 'react';
 
function Form({ onAddItems, sortOrder, onSort, onClearItems, onSearch }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
 
  function handleSubmit(e) {
    e.preventDefault();
 
    // Validation for description
    if (!description || description.trim() === "") {
      alert("Please enter a valid description!");
      return;
    }
 
    // Create a new item object
    const newItem = {
      id: Date.now(), // Unique timestamp-based ID
      description: description.trim(),
      quantity,
      packed: false,
    };
 
    // Use the prop to handle the addition of a new item
    onAddItems(newItem);
 
    // Clear input fields after submission
    setDescription("");
    setQuantity(1);
  }
 
  function handleQuantityChange(e) {
    setQuantity(Number(e.target.value));
  }
 
  function handleSearchChange(e) {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query state
    onSearch(query); // Pass the query to the parent component's onSearch function
  }
 
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={handleQuantityChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={onClearItems}>
        Clear All Items
      </button>
 
      {/* Sort By dropdown */}
      <div>
        <label htmlFor="sortOrder">Sort By: </label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => onSort(e.target.value)}>
          <option value="input">Input Order</option>
          <option value="description">Description</option>
          <option value="packed">Packed Status</option>
        </select>
      </div>
 
      {/* Search Bar */}
      <div>
        <label htmlFor="search">Search Items: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange} // This is now defined
          placeholder="Search by description"
        />
      </div>
    </form>
  );
}
 
export default Form;