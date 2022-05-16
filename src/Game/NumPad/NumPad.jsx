import React from 'react'
import classes from './NumPad.module.scss';

function NumPad({children}) {
	return (
		<div className={classes.numpad}>
			{children}
		</div>
	)
}

export default NumPad;