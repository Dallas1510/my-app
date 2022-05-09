import classes from './NumberButton.module.scss'

function NumberButton(props) {
	return (
		<button
			className={classes.numberButton}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	)
}

export default NumberButton;