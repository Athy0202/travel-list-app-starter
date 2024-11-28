import React, { useState } from 'react';
 
function Form({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
 
  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) {
      return;
    }
 
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false
    };
    setDescription("");
    setQuantity(1);
    handleAddItem(newItem);
  }
 
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
 
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  }
 
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={handleQuantity}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input
        onChange={handleDescription}
        value={description}
        type="text"
        placeholder="Add an item"
      />
      <button>Add</button>
    </form>
  );
}
 
export default Form;
 