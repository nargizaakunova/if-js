console.log('------------------- Lesson 16 -----------------------');
// Palindrome
const palindrome = (word) => {
  if (typeof word !== 'string') {
    throw new Error("Input should be of type 'string'");
  }
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  if (reversedWord === word) {
    return true;
  }
  return false;
};

try {
  console.log(palindrome('abba'));
  console.log(palindrome('hello'));
  console.log(palindrome(123321));
} catch (error) {
  console.error(error.message);
}

// 1. Min
function getMinVal(a, b) {
  return Math.min(a, b);
}

console.log(getMinVal(5, 15));
console.log(getMinVal(1000, 15));

// 2. Max

const getMaxVal = (a, b) => Math.max(a, b);
console.log(getMaxVal(10, 1000));
console.log(getMaxVal(150, 8));

// 3. Ternary operator
function getMinValue(a, b) {
  return a < b ? a : b;
}

console.log(getMinValue(1, 10));
console.log(getMinValue('abc', 'abd'));

function getMaxValue(a, b) {
  return a > b ? a : b;
}

console.log(getMaxValue(1, 11));
console.log(getMaxValue('abc', 'abd'));

// Element replacement

const createListWithRandomNums = () => {
  const array = [];
  for (let i = 1; i <= 10; i++) {
    const num = Math.floor(Math.random() * 101);
    array.push(num);
  }
  return array;
};

const array1 = createListWithRandomNums();
const array2 = createListWithRandomNums();
const array3 = createListWithRandomNums();
// Solution 1
const replaceZero = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i].toString();
    if (!number.includes(0)) {
      result.push(+number);
    } else {
      result.push(number.replaceAll('0', 'zero'));
    }
  }
  return result;
};

console.log(replaceZero(array1));
console.log(replaceZero(array2));
console.log(replaceZero(array3));

// Solution 2
const replaceZero2 = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i].toString();
    if (!number.includes('0')) {
      result.push(+number);
    } else {
      let combo = '';
      for (let j = 0; j < number.length; j++) {
        if (number[j] === '0') {
          combo += 'zero';
        } else {
          combo += number[j];
        }
      }
      result.push(combo);
    }
  }
  return result;
};

console.log(replaceZero2(array1));
console.log(replaceZero2(array2));
console.log(replaceZero2(array3));
