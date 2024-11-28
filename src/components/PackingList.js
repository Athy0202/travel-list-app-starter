import React from 'react';
import Item from './Item';
 
function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}
 
export default PackingList;
