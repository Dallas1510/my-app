import React from 'react';
import classes from './Item.module.scss';

function Item({ isActive, doubleNumberWarning, onClick, value }) {
  return (
    <div
      className={`${classes.item} ${isActive && classes.active} ${
        doubleNumberWarning && classes.doubleNumber
      }`}
      onClick={onClick}
    >
      <p>{value}</p>
    </div>
  );
}

export default Item;
