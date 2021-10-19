'use strict';

const isBigger = (a, b) => a > b;

const isSmaller = (a, b) => a < b;

const getMin = (...numbers) => {
  let min = +Infinity;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < min) min = number;
  }
  return min;
}

const isPrime = number => {
  if (number <= 2 && number >= -2) return true;
  let primary = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      primary = false;
      break;
    }
  }
  return primary;
}

const abs = num => {
  if (num < 0) return -num;
  return num;
}

const getClosestToZero = (...numbers) => {
  let closest = +Infinity;
  for (let i = 0; i < numbers.length; i ++) {
    const number = numbers[i];
    if (abs(number) < closest) closest = number;
  }
  return closest;
}

const reverseNumber = (number) => {
  const string = number + '';
  let reversed = '';
  let i = 0;
  if (number < 0) {
    reversed += '-';
    i++;
  }
  for (let j = string.length - 1; j >= i; j--) {
    reversed += string[j];
  }
  return Number(reversed);
}

console.log('%cisBigger:', 'color: yellow; background: black');
console.log('5 is bigger than 7:');
console.log(isBigger(5, 7));
console.log('-2 is bigger than -17');
console.log(isBigger(-2, -17));
console.log('\n');

console.log('%cisSmaller:', 'color: yellow; background: black');
console.log('-2 is smaller than 2:');
console.log(isSmaller(-2, 2));
console.log('7 is smaller than 0');
console.log(isSmaller(7, 0));
console.log('\n');

console.log('%cgetMin', 'color: yellow; background: black');
console.log('min in 3, 7, -3');
console.log(getMin(3, 7, -3));
console.log('min in 0, 10, 20, 100, 4');
console.log(getMin(0, 10, 20, 100, 4));
console.log('\n');

console.log('%cisPrime', 'color: yellow; background: black');
console.log('13 is prime');
console.log(isPrime(13));
console.log('12 is prime');
console.log(isPrime(12));
console.log('\n');

console.log('%cgetClosestToZero', 'color: yellow; background: black');
console.log('closest in 2, 90, -3, -1');
console.log(getClosestToZero(2, 90, -3, -1));
console.log('closest in 1, 2, 0, 3');
console.log(getClosestToZero(1, 2, 0, 3));
console.log('\n');

console.log('%creverseNumber', 'color: yellow; background: black');
console.log('reverse -5467:');
console.log(reverseNumber(-5467));
console.log('reverse 1234:');
console.log((reverseNumber(1234)));



// console.log(isPrime(32));

// console.log(reverseNumber(-245));


