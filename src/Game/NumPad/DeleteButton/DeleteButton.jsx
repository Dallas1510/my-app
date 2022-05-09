import classes from './DeleteButton.module.scss'

function DeleteButton(props) {
	return (
		<button
			className={classes.DeleteButton}
			onClick={props.onClick}
		>X
		</button>
	)
}

export default DeleteButton;