/* eslint-disable no-loop-func */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Section from '../components/Section/Section';
import Item from '../components/Item/Item';
import NumPad from '../components/NumPad/NumPad';
import NumberButton from '../components/NumberButton/NumberButton';
import classes from './App.module.scss';

let activeElem = [null, null];
let horizontalRow = [];
let verticalCol = [];
let section = [];
let checkedHorItems = [];
let checkedVertItems = [];
let checkedSection = [];
const allDoubleNumbersWarnings = [];

function App() {
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const horizontalPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const verticalPositions = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const [items, setItems] = useState([
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
  ]);

  function onActiveElemHandler(sectionIndex, itemIndex) {
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
      activeElem = [null, null];
    } else {
      newItemsMaped[sectionIndex][itemIndex].isActive = true;
      activeElem = [sectionIndex, itemIndex];
    }
    setItems(() => newItemsMaped);
  }

  function lineDeterminant(positions) {
    const checkedItems = [];

    positions.forEach((pos) => {
      if (pos.includes(activeElem[0])) {
        for (let i = 0; i <= pos.length - 1; i++) {
          positions.forEach((posItem) => {
            if (posItem.includes(activeElem[1])) {
              for (let j = 0; j <= posItem.length - 1; j++) {
                checkedItems.push([pos[i], posItem[j]]);
              }
            }
          });
        }
      }
    });
    return checkedItems;
  }

  function inputedNumbersLine(positions) {
    const numbersArr = [];

    positions.forEach((pos) => {
      if (pos.includes(activeElem[0])) {
        for (let i = 0; i <= pos.length - 1; i++) {
          const arr = [...items[pos[i]]];
          positions.forEach((posItem) => {
            if (posItem.includes(activeElem[1])) {
              for (let j = 0; j <= posItem.length - 1; j++) {
                numbersArr.push(arr[posItem[j]].playerNumber);
              }
            }
          });
        }
      }
    });
    return numbersArr;
  }

  function sectionDeterminant() {
    const index = activeElem[0];
    const checkedItems = [];

    items[index].forEach((_, i) => {
      checkedItems.push([index, i]);
    });
    checkedSection = [...checkedItems];
  }

  function inputedNumbersSec() {
    const index = activeElem[0];
    const numbersArr = [];

    items[index].forEach((item) => {
      numbersArr.push(item.playerNumber);
    });
    section = [...numbersArr];
  }

  function checkDoubleNumber(inputedNums, checkedItems) {
    const checkedNumbers = [];
    let index;

    for (let i = 0; i <= inputedNums.length - 1; i++) {
      if (
        (checkedNumbers.includes(inputedNums[i]) &&
          allDoubleNumbersWarnings.length === 0) ||
        (checkedNumbers.includes(inputedNums[i]) &&
          allDoubleNumbersWarnings.every(
            (item) => item.flat().join('') !== checkedItems.flat().join('')
          ))
      ) {
        allDoubleNumbersWarnings.push(checkedItems);
        break;
      }
      if (!checkedNumbers.includes(inputedNums[i])) {
        index = allDoubleNumbersWarnings.findIndex(
          (item) => item.flat().join('') === checkedItems.flat().join('')
        );
      }
      if (index >= 0) {
        allDoubleNumbersWarnings.splice(index, 1);
      }
      if (!checkedNumbers.includes(inputedNums[i]) && inputedNums[i] != null) {
        checkedNumbers.push(inputedNums[i]);
      }
    }
  }

  function doubleNumbersWarningShow(checkedItems) {
    const itemsClone = [...items];
    if (
      allDoubleNumbersWarnings.every(
        (item) => item.flat().join('') !== checkedItems.flat().join('')
      ) ||
      allDoubleNumbersWarnings.length === 0
    ) {
      checkedItems.forEach((item) => {
        itemsClone[item[0]][item[1]].doubleNumberWarning = false;
      });
    }
    if (allDoubleNumbersWarnings.length >= 1) {
      allDoubleNumbersWarnings.forEach((elem) => {
        elem.forEach((item) => {
          itemsClone[item[0]][item[1]].doubleNumberWarning = true;
        });
      });
    }

    setItems(() => itemsClone);
  }

  function numberChangeHandler(value) {
    const itemsClone = [...items];
    itemsClone[activeElem[0]][activeElem[1]].playerNumber = value;
    setItems(() => itemsClone);
  }

  function onClickItemHandler(sectionIndex, itemIndex) {
    onActiveElemHandler(sectionIndex, itemIndex);
    if (activeElem[0] !== null) {
      horizontalRow = inputedNumbersLine(horizontalPositions);
      checkedHorItems = lineDeterminant(horizontalPositions);
      verticalCol = inputedNumbersLine(verticalPositions);
      checkedVertItems = lineDeterminant(verticalPositions);
      inputedNumbersSec();
      sectionDeterminant();
    }
  }

  function onClickButtonHandler(value) {
    if (activeElem[0] !== null) {
      numberChangeHandler(value);
      horizontalRow = inputedNumbersLine(horizontalPositions);
      checkedHorItems = lineDeterminant(horizontalPositions);
      verticalCol = inputedNumbersLine(verticalPositions);
      checkedVertItems = lineDeterminant(verticalPositions);
      inputedNumbersSec();
      sectionDeterminant();
      checkDoubleNumber(horizontalRow, checkedHorItems);
      checkDoubleNumber(verticalCol, checkedVertItems);
      checkDoubleNumber(section, checkedSection);
      doubleNumbersWarningShow(checkedHorItems);
      doubleNumbersWarningShow(checkedVertItems);
      doubleNumbersWarningShow(checkedSection);
    }
  }

  return (
    <div>
      <div className={classes.app}>
        {items.map((_, sectionIndex) => (
          <Section key={sectionIndex}>
            {items[sectionIndex].map((__, itemIndex) => (
              <Item
                key={itemIndex}
                itemProps={items[sectionIndex][itemIndex]}
                onClick={() => onClickItemHandler(sectionIndex, itemIndex)}
              />
            ))}
          </Section>
        ))}
      </div>

      <NumPad>
        {numberButtons.map((btn) => (
          <NumberButton
            key={btn}
            value={btn}
            onClick={() => onClickButtonHandler(btn)}
          />
        ))}

        <NumberButton value='X' onClick={() => onClickButtonHandler(null)} />
      </NumPad>
    </div>
  );
}

export default App;
