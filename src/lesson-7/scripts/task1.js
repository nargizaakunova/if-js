// Task 1
// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности. Например:

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};
const obj4 = obj1;
const obj5 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
      b: 2,
    },
  },
};

const deepEqual = (object1, object2) => {
  if (object1 === null || object2 === null) {
    return false;
  }
  if (object1 === object2) {
    return true;
  }
  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }
  const keysObjectOne = Object.keys(object1);
  const keysObjectTwo = Object.keys(object2);

  if (keysObjectOne.length !== keysObjectTwo.length) {
    return false;
  }

  for (const key of keysObjectOne) {
    if (!keysObjectTwo.includes(key)) {
      return false;
    }
    if (deepEqual(object1[key], object2[key]) === false) {
      return false;
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(obj2, obj3)); // false
console.log(deepEqual(obj4, obj3)); // false
console.log(deepEqual(obj4, obj1)); // true
console.log(deepEqual(obj5, obj1)); // false
console.log(deepEqual('obj5', 12)); // false
console.log(deepEqual(null, null)); // false
