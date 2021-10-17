'use strict';

const startGameButton =  document.getElementById('pyramid');
const brick = '[~]';
const space = '   ';

const repeat = (string, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

const isInteger = num => num % 1 === 0;

const inBorders = (num, leftBorder, rightBorder) => {
  return num > leftBorder && num <= rightBorder;
}

const getFloor = (floor, floorsNum) => {
  const spacesNum = floorsNum - floor;
  const bricksNum = 1 + 2 * (floor - 1);
  const spaces = repeat(space, spacesNum);
  const bricks = repeat(brick, bricksNum);
  return spaces + bricks + spaces;
}

const getPyramid = floorsNum => {
  let pyramid = ''
  for (let floor = 1; floor <= floorsNum; floor++) {
    pyramid += getFloor(floor, floorsNum);
    if (floor !== floorsNum) pyramid += '\n';
  }
  return pyramid;
}

startGameButton.addEventListener('click', () => {
  const floorsNum = Number(window.prompt('Enter a natural number between 0 and 20'));
  if (!(isInteger(floorsNum) && inBorders(floorsNum, 0, 20))) {
    console.error('Incorrect!');
    return;
  }
  console.log(getPyramid(floorsNum));
});
