/* eslint-disable no-loop-func */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Section from './Section/Section';
import Item from './Section/Item/Item';
import NumPad from './NumPad/NumPad';
import NumberButton from './NumPad/NumberButton/NumberButton';
import DeleteButton from './NumPad/DeleteButton/DeleteButton';
import classes from './App.module.scss';

function App() {
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let activeElem = [null, null];
  let horizontalRow = [];
  let verticalCol = [];
  let section = [];
  let checkedHorItems = [];
  let checkedVertItems = [];
  let checkedSection = [];
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
  const allDoubleNumbersWarnings = [];

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
    setItems(newItemsMaped);
  }


  function onClickItemHandler(sectionIndex, itemIndex) {
    const itemsClone = [...items];

    onActiveElemHandler(sectionIndex, itemIndex);
    rowDeterminant(itemsClone, horizontalPositions);
    colDeterminant(itemsClone, verticalPositions);
  }

  function onClickButtonHandler(value) {
    // const itemsClone = [...items];
    numberChangeHandler(value);
    rowDeterminant(items, horizontalPositions);
    colDeterminant(items, verticalPositions);
    sectionDeterminant(items);
    checkDoubleNumber(horizontalRow, checkedHorItems);
    checkDoubleNumber(verticalCol, checkedVertItems);
    checkDoubleNumber(section, checkedSection);
    doubleNumbersWarningShow(items, checkedHorItems);
    doubleNumbersWarningShow(items, checkedVertItems);
    doubleNumbersWarningShow(items, checkedSection);
  }

  function rowDeterminant(itemsArr, positions) {
    const numbersArr = [];
    const checkedItems = [];

    positions.forEach((pos) => {
      if (pos.includes(activeElem[0])) {
        for (let i = 0; i <= pos.length - 1; i++) {
          const arr = [...itemsArr[pos[i]]];
          positions.forEach((posItem) => {
            if (posItem.includes(activeElem[1])) {
              for (let j = 0; j <= posItem.length - 1; j++) {
                checkedItems.push([pos[i], posItem[j]]);
                numbersArr.push(arr[posItem[j]].playerNumber);
              }
            }
          });
        }
      }
    });
    horizontalRow = numbersArr;
    checkedHorItems = checkedItems;
  }

  function colDeterminant(itemsArr, positions) {
    const numbersArr = [];
    const checkedItems = [];

    positions.forEach((pos) => {
      if (pos.includes(activeElem[0])) {
        for (let i = 0; i <= pos.length - 1; i++) {
          const arr = [...itemsArr[pos[i]]];
          positions.forEach((posItem) => {
            if (posItem.includes(activeElem[1])) {
              for (let j = 0; j <= posItem.length - 1; j++) {
                checkedItems.push([pos[i], posItem[j]]);
                numbersArr.push(arr[posItem[j]].playerNumber);
              }
            }
          });
        }
      }
    });
    verticalCol = numbersArr;
    checkedVertItems = checkedItems;
  }

  function sectionDeterminant(itemsArr) {
    const index = activeElem[0];
    const numbersArr = [];
    const checkedItems = [];

    itemsArr[index].forEach((item, i) => {
      numbersArr.push(item.playerNumber);
      checkedItems.push([index, i]);
    });
    section = numbersArr;
    checkedSection = checkedItems;
  }

  function checkDoubleNumber(arr, checkedItems) {
    const checkedNumbers = [];
    let index;

    for (let i = 0; i <= arr.length - 1; i++) {
      if (
        (checkedNumbers.includes(arr[i]) &&
          allDoubleNumbersWarnings.length === 0) ||
        (checkedNumbers.includes(arr[i]) &&
          allDoubleNumbersWarnings.every(
            (item) => item.flat().join('') !== checkedItems.flat().join('')
          ))
      ) {
        allDoubleNumbersWarnings.push(checkedItems);
        break;
      }
      if (!checkedNumbers.includes(arr[i])) {
        index = allDoubleNumbersWarnings.findIndex(
          (item) => item.flat().join('') === checkedItems.flat().join('')
        );
      }
      if (index >= 0) {
        allDoubleNumbersWarnings.splice(index, 1);
      }
      if (!checkedNumbers.includes(arr[i]) && arr[i] != null) {
        checkedNumbers.push(arr[i]);
      }
    }
  }

  function doubleNumbersWarningShow(itemsArr, checkedItems) {
    const itemsClone = [...itemsArr];
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

    setItems(itemsClone);
  }

  function numberChangeHandler(value) {
    const itemsClone = [...items];
    itemsClone[activeElem[0]][activeElem[1]].playerNumber = value;
    setItems(itemsClone);
  }

  return (
    <div>
      <div className={classes.app}>
        {items.map((_, sectionIndex) => (
          <Section key={sectionIndex}>
            {items[sectionIndex].map((__, itemIndex) => (
              <Item
                key={itemIndex}
                isActive={items[sectionIndex][itemIndex].isActive}
                value={items[sectionIndex][itemIndex].playerNumber}
                doubleNumberWarning={
                  items[sectionIndex][itemIndex].doubleNumberWarning
                }
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

        <DeleteButton onClick={() => onClickButtonHandler(null)} />
      </NumPad>
    </div>
  );
}

export default App;
