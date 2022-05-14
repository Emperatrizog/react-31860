import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSubstract = () => {
    if (count > initial) {
      setCount((counter) => counter - 1);
    }
  };
  const handleAdd = () => {
    if (count < stock) {
      setCount((counter) => counter + 1);
    }
  };

  return (
    <div>
      <div>
        <button className="btn-coffee" onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button className="btn-coffee" onClick={handleAdd}>+</button>
      </div> <br></br>
      <button className="btn-coffee" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
