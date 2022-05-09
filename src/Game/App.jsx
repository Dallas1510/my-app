import React from 'react'
import Section from './Section/Section'
import Item from './Section/Item/Item'
import NumPad from './NumPad/NumPad'
import NumberButton from './NumPad/NumberButton/NumberButton'
import DeleteButton from './NumPad/DeleteButton/DeleteButton'
import classes from './App.module.scss'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				[{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}],
				[{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}], [{
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}, {
					trueNumber: null,
					playerNumber: null,
					isActive: false,
					doubleNumberWarning: false
				}],
			],

		};
		this.numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		this.activeElem = [null, null];
		this.horizontalRow = [];
		this.verticalCol = [];
		this.checkedHorItems = [];
		this.checkedVertItems = [];
		this.horizontalPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
		this.verticalPositions = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
		this.allDoubleNumbersWarnings = [];

		this.onClickItemHandler = this.onClickItemHandler.bind(this);
		this.rowDeterminant = this.rowDeterminant.bind(this);
		this.colDeterminant = this.colDeterminant.bind(this);
		this.checkDoubleNumber = this.checkDoubleNumber.bind(this);
		this.onClickButtonHandler = this.onClickButtonHandler.bind(this);
		this.numberChangeHandler = this.numberChangeHandler.bind(this);
	}





	onClickItemHandler(sectionIndex, itemIndex) {
		let items = [...this.state.items];

		let onActiveElemHandler = () => {
			let newItemsMaped = items.map(item => {
				let reverseElem = item.map(elem => {
					let newElem = {};
					Object.assign(newElem, elem);
					newElem.isActive = false;
					return newElem;
				})
				return reverseElem;
			});
			if (items[sectionIndex][itemIndex].isActive) {
				this.setState(() => {
					return { items: newItemsMaped }
				});
				this.activeElem = [null, null]
			} else {
				newItemsMaped[sectionIndex][itemIndex].isActive = true;
				this.activeElem = [sectionIndex, itemIndex];
			}
			this.setState(() => {
				return { items: newItemsMaped }
			});
		};

		onActiveElemHandler();
		this.rowDeterminant(items, this.horizontalPositions);
		this.colDeterminant(items, this.verticalPositions);
	}

	rowDeterminant(items, positions) {
		let numbersArr = [];
		let checkedItems = [];

		positions.forEach(pos => {
			if (pos.includes(this.activeElem[0])) {
				for (let i = 0; i <= pos.length - 1; i++) {
					let arr = [...items[pos[i]]];
					positions.forEach(posItem => {
						if (posItem.includes(this.activeElem[1])) {
							for (let j = 0; j <= posItem.length - 1; j++) {
								checkedItems.push([pos[i], posItem[j]]);
								numbersArr.push(arr[posItem[j]].playerNumber);
							}
						}
					})
				}
			}
		})
		this.horizontalRow = numbersArr;
		this.checkedHorItems = checkedItems;
	}

	colDeterminant(items, positions) {
		let numbersArr = [];
		let checkedItems = [];

		positions.forEach(pos => {
			if (pos.includes(this.activeElem[0])) {
				for (let i = 0; i <= pos.length - 1; i++) {
					let arr = [...items[pos[i]]];
					positions.forEach(posItem => {
						if (posItem.includes(this.activeElem[1])) {
							for (let j = 0; j <= posItem.length - 1; j++) {
								checkedItems.push([pos[i], posItem[j]]);
								numbersArr.push(arr[posItem[j]].playerNumber);
							}
						}
					})
				}
			}
		})
		this.verticalCol = numbersArr;
		this.checkedVertItems = checkedItems;
	}

	checkDoubleNumber(items, numArr, checkedItems) {
		let arr = [...numArr];
		let checkedNumbers = [];
		for (let i = 0; i <= arr.length - 1; i++) {
			if (checkedNumbers.includes(arr[i])) {
				this.allDoubleNumbersWarnings.push(checkedItems)
				break;
			} else if (!checkedNumbers.includes(arr[i])) {
				// this.allDoubleNumbersWarnings.forEach((item, index) => {
				// 	let flatArrWarnings = item.flat();
				// 	let flatArrCheckedItems = checkedItems.flat();
				// 	for(let i = 0; i <= flatArrWarnings.length - 1; i++){
				// 		if(flatArrWarnings[i] === flatArrCheckedItems[i]){
				// 			continue;
				// 		} else if (!flatArrWarnings[i] === flatArrCheckedItems[i]) {
				// 			break;
				// 		}
				// 		this.allDoubleNumbersWarnings.splice(index, 1);
				// 	}
				// 	}
				// )
			}
			if (!checkedNumbers.includes(arr[i]) && arr[i] != null) {
				checkedNumbers.push(arr[i]);
			}
		}
		console.log(this.allDoubleNumbersWarnings);
		console.log(this.horizontalRow);
	}


	onClickButtonHandler(value) {
		let items = [...this.state.items];

		this.numberChangeHandler(items, value);
		this.rowDeterminant(items, this.horizontalPositions);
		this.colDeterminant(items, this.verticalPositions);
		this.checkDoubleNumber(items, this.horizontalRow, this.checkedHorItems);
		this.checkDoubleNumber(items, this.verticalCol, this.checkedVertItems);
	}

	numberChangeHandler(items, value) {
		items[this.activeElem[0]][this.activeElem[1]].playerNumber = value;
		this.setState(() => {
			return { items }
		});
	}


	render() {
		return (
			<div>
				<div className={classes.app}>
					{this.state.items.map((item, sectionIndex) => {
						return (
							<Section key={sectionIndex}>
								{this.state.items[sectionIndex].map((item, itemIndex) => {
									return (
										<Item
											key={itemIndex}
											isActive={this.state.items[sectionIndex][itemIndex].isActive}
											value={this.state.items[sectionIndex][itemIndex].playerNumber}
											doubleNumberWarning={this.state.items[sectionIndex][itemIndex].doubleNumberWarning}
											onClick={() => this.onClickItemHandler(sectionIndex, itemIndex)}
										/>
									)
								})}
							</Section>
						)
					})}
				</div>

				<NumPad>
					{this.numberButtons.map(btn => {
						return (
							<NumberButton
								key={btn}
								value={btn}
								onClick={() => this.onClickButtonHandler(btn)}
							/>
						)
					})}

					<DeleteButton onClick={() => this.onClickButtonHandler(null)} />

				</NumPad>
			</div>
		)
	}
}

export default App;
