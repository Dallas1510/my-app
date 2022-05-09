import classes from './NumPad.module.scss';

function NumPad(props) {
	return (
		<div className={classes.numpad}>
			{props.children}
		</div>
	)
}

export default NumPad;