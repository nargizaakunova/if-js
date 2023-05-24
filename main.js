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

