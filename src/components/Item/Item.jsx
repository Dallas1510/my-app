import React from 'react';
import classes from './Item.module.scss';

function Item({ itemProps, onClick }) {
  const { isActive, doubleNumberWarning, playerNumber } = itemProps;
  return (
    <div
      className={`${classes.item} ${isActive && classes.active} ${
        doubleNumberWarning && classes.doubleNumber
      }`}
      onClick={onClick}
    >
      <p>{playerNumber}</p>
    </div>
  );
}

export default Item;
