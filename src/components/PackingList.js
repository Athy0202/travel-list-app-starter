import React from 'react';
import Item from './Item';
 
function PackingList({ items, onDelete, onUpdate }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
}
 
export default PackingList;