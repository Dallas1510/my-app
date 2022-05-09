import classes from './Item.module.scss';

function Item(props) {
	return (
		<div
			className={`${classes.item} ${props.isActive ? classes.active : ''} ${props.doubleNumberWarning ? classes.doubleNumberWarning : ''}`}
			onClick={props.onClick}
		>
			<p className={classes.param}>{props.value}</p>
		</div>
	);
}


export default Item;