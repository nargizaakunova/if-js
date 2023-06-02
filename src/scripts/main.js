console.log('------------------- Lesson 17 -----------------------');

const sum = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

console.log(sum(2)(3));
console.log(sum(5)(2));
