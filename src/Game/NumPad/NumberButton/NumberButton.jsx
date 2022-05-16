import React from 'react'
import classes from './NumberButton.module.scss';

function NumberButton({onClick, value}) {
   return (
      <button
         type='button'
         className={classes.numberButton}
         onClick={onClick}
      >
         {value}
      </button>
   );
}

export default NumberButton;
