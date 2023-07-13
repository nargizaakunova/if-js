import User from './entities/User.js';
import Student from './entities/Student.js';
import Students from './entities/Students.js';
import studentsData from './students.js';

const user = new User({ firstName: 'Kate', lastName: 'John' });
// Checking if my User class works
console.log(user);
console.log(user.fullName);

const student = new Student({
  courseName: 'AI',
  admissionYear: 2020,
  firstName: 'Dan',
  lastName: 'Abramovich',
});
// Checking if my Student class works, if it inherits from User
console.log(student);
console.log(student.fullName);
console.log(student.course);

const students = new Students(studentsData);
// console.log(students);

// Выведет:
// [
//   'Василий Петров - Java, 1 курс',
//   'Николай Петров - Android, 1 курс',
//   'Иван Иванов - JavaScript, 2 курс',
//   'Александр Федоров - Python, 3 курс',
// ]

console.log(students.getInfo());
