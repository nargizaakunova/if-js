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
