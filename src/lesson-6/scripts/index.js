// function palindrome in one line
const palindrome = (word) => word === word.split('').reverse().join('');
console.log(palindrome('abba')); // true
console.log(palindrome('test')); // false