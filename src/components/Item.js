import React from 'react';
 
function Item({ item, handleDeleteItem, handleUpdateItem }) {
  return (
    <li>
      <input
        onChange={() => handleUpdateItem(item.id)}
        type="checkbox"
        checked={item.packed}
      />
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
 
export default Item;
 