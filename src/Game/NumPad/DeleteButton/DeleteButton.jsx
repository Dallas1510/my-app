import React from 'react';
import classes from './DeleteButton.module.scss';

function DeleteButton({onClick}) {
   return (
      <button type='button' className={classes.DeleteButton} onClick={onClick}>
         X
      </button>
   );
}

export default DeleteButton;
