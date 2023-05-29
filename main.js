console.log('------------------- Lesson 15 -----------------------');
// 6)
let user = 'John Doe';
console.log(user);

const student = 'Nargiza';
console.log(student);

user = student;
console.log(user); // 'Nargiza'

// 7)
let test = 1;
test += 1;
test += '1'; // '21'
console.log(test); // '21'

test--; // 20
console.log(test);

console.log(Boolean(test)); // true

// 8)
const arr = [2, 3, 5, 8];
let multipliedAmount = 1;

for (let i = 0; i < arr.length; i++) {
  multipliedAmount *= arr[i];
}

console.log(multipliedAmount);

// 9)
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// 10)
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}

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
const array = [10, 400, 50, 205, 0, 13, 350, 18, 960, 7000];
const array2 = [1, 40, 500, 200005, 16];
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

console.log(replaceZero(array));
console.log(replaceZero(array2));
