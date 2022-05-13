/* eslint-disable react/no-array-index-key */
import React from "react";
import Section from "./Section/Section";
import Item from "./Section/Item/Item";
import NumPad from "./NumPad/NumPad";
import NumberButton from "./NumPad/NumberButton/NumberButton";
import DeleteButton from "./NumPad/DeleteButton/DeleteButton";
import classes from "./App.module.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
        [
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
          {
            trueNumber: null,
            playerNumber: null,
            isActive: false,
            doubleNumberWarning: false,
          },
        ],
      ],
    };
    this.numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.activeElem = [null, null];
    this.horizontalRow = [];
    this.verticalCol = [];
    this.section = [];
    this.checkedHorItems = [];
    this.checkedVertItems = [];
    this.checkedSection = [];
    this.horizontalPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    this.verticalPositions = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    this.allDoubleNumbersWarnings = [];

    this.onClickItemHandler = this.onClickItemHandler.bind(this);
    this.rowDeterminant = this.rowDeterminant.bind(this);
    this.colDeterminant = this.colDeterminant.bind(this);
    this.checkDoubleNumber = this.checkDoubleNumber.bind(this);
    this.onClickButtonHandler = this.onClickButtonHandler.bind(this);
    this.numberChangeHandler = this.numberChangeHandler.bind(this);
    this.doubleNumbersWarningShow = this.doubleNumbersWarningShow.bind(this);
    this.sectionDeterminant = this.sectionDeterminant.bind(this);
  }

  onClickItemHandler(sectionIndex, itemIndex) {
    const { items } = this.state;

    const onActiveElemHandler = () => {
      const newItemsMaped = items.map((item) => {
        const reverseElem = item.map((elem) => {
          const newElem = {};
          Object.assign(newElem, elem);
          newElem.isActive = false;
          return newElem;
        });
        return reverseElem;
      });
      if (items[sectionIndex][itemIndex].isActive) {
        this.setState(() => ({ items: newItemsMaped }));
        this.activeElem = [null, null];
      } else {
        newItemsMaped[sectionIndex][itemIndex].isActive = true;
        this.activeElem = [sectionIndex, itemIndex];
      }
      this.setState(() => ({ items: newItemsMaped }));
    };

    onActiveElemHandler();
    this.rowDeterminant(items, this.horizontalPositions);
    this.colDeterminant(items, this.verticalPositions);
  }

  onClickButtonHandler(value) {
    const { items } = this.state;

    this.numberChangeHandler(items, value);
    this.rowDeterminant(items, this.horizontalPositions);
    this.colDeterminant(items, this.verticalPositions);
    this.sectionDeterminant(items);
    this.checkDoubleNumber(this.horizontalRow, this.checkedHorItems);
    this.checkDoubleNumber(this.verticalCol, this.checkedVertItems);
    this.checkDoubleNumber(this.section, this.checkedSection);
    this.doubleNumbersWarningShow(items, this.checkedHorItems);
    this.doubleNumbersWarningShow(items, this.checkedVertItems);
    this.doubleNumbersWarningShow(items, this.checkedSection);
  }

  rowDeterminant(items, positions) {
    const numbersArr = [];
    const checkedItems = [];

    positions.forEach((pos) => {
      if (pos.includes(this.activeElem[0])) {
        for (let i = 0; i <= pos.length - 1; i++) {
          const arr = [...items[pos[i]]];
          positions.forEach((posItem) => {
            if (posItem.includes(this.activeElem[1])) {
              for (let j = 0; j <= posItem.length - 1; j++) {
                checkedItems.push([pos[i], posItem[j]]);
                numbersArr.push(arr[posItem[j]].playerNumber);
              }
            }
          });
        }
      }
    });
    this.horizontalRow = numbersArr;
    this.checkedHorItems = checkedItems;
  }

  colDeterminant(items, positions) {
    const numbersArr = [];
    const checkedItems = [];

    positions.forEach((pos) => {
      if (pos.includes(this.activeElem[0])) {
        for (let i = 0; i <= pos.length - 1; i++) {
          const arr = [...items[pos[i]]];
          positions.forEach((posItem) => {
            if (posItem.includes(this.activeElem[1])) {
              for (let j = 0; j <= posItem.length - 1; j++) {
                checkedItems.push([pos[i], posItem[j]]);
                numbersArr.push(arr[posItem[j]].playerNumber);
              }
            }
          });
        }
      }
    });
    this.verticalCol = numbersArr;
    this.checkedVertItems = checkedItems;
  }

  sectionDeterminant(items) {
    const index = this.activeElem[0];
    const numbersArr = [];
    const checkedItems = [];

    items[index].forEach((item, i) => {
      numbersArr.push(item.playerNumber);
      checkedItems.push([index, i]);
    });
    this.section = numbersArr;
    this.checkedSection = checkedItems;
  }

  checkDoubleNumber(arr, checkedItems) {
    const checkedNumbers = [];

    for (let i = 0; i <= arr.length - 1; i++) {
      if (
        checkedNumbers.includes(arr[i]) &&
        this.allDoubleNumbersWarnings.length === 0
      ) {
        this.allDoubleNumbersWarnings.push(checkedItems);
        break;
      } else if (
        checkedNumbers.includes(arr[i]) &&
        this.allDoubleNumbersWarnings.length >= 1 &&
        this.allDoubleNumbersWarnings.every(
          (item) => item.flat().join("") !== checkedItems.flat().join("")
        )
      ) {
        this.allDoubleNumbersWarnings.push(checkedItems);
        break;
      } else if (!checkedNumbers.includes(arr[i])) {
        const index = this.allDoubleNumbersWarnings.findIndex(
          (item) => item.flat().join("") === checkedItems.flat().join("")
        );
        if (index >= 0) {
          this.allDoubleNumbersWarnings.splice(index, 1);
        }
      }
      if (!checkedNumbers.includes(arr[i]) && arr[i] != null) {
        checkedNumbers.push(arr[i]);
      }
    }
  }

  doubleNumbersWarningShow(items, checkedItems) {
    const itemsClone = [...items];
    if (
      this.allDoubleNumbersWarnings.every(
        (item) => item.flat().join("") !== checkedItems.flat().join("")
      ) ||
      this.allDoubleNumbersWarnings.length === 0
    ) {
      checkedItems.forEach((item) => {
        itemsClone[item[0]][item[1]].doubleNumberWarning = false;
      });
    }
    if (this.allDoubleNumbersWarnings.length >= 1) {
      this.allDoubleNumbersWarnings.forEach((elem) => {
        elem.forEach((item) => {
          itemsClone[item[0]][item[1]].doubleNumberWarning = true;
        });
      })
    }

    this.setState(() => ({ items: itemsClone }));
  }

  numberChangeHandler(items, value) {
    const itemsClone = [...items];
    itemsClone[this.activeElem[0]][this.activeElem[1]].playerNumber = value;
    this.setState(() => ({ items: itemsClone }));
  }

  render() {
    return (
      <div>
        <div className={classes.app}>
          {this.state.items.map((item, sectionIndex) => (
            <Section key={sectionIndex}>
              {this.state.items[sectionIndex].map((elem, itemIndex) => (
                <Item
                  key={itemIndex}
                  isActive={this.state.items[sectionIndex][itemIndex].isActive}
                  value={this.state.items[sectionIndex][itemIndex].playerNumber}
                  doubleNumberWarning={
                    this.state.items[sectionIndex][itemIndex]
                      .doubleNumberWarning
                  }
                  onClick={() =>
                    this.onClickItemHandler(sectionIndex, itemIndex)
                  }
                />
              ))}
            </Section>
          ))}
        </div>

        <NumPad>
          {this.numberButtons.map((btn) => (
            <NumberButton
              key={btn}
              value={btn}
              onClick={() => this.onClickButtonHandler(btn)}
            />
          ))}

          <DeleteButton onClick={() => this.onClickButtonHandler(null)} />
        </NumPad>
      </div>
    );
  }
}

export default App;
