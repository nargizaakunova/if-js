export const sum = (num1) => {
  if (isNaN(num1)) {
    throw new Error('num1 should be a valid number');
  }
  return (num2) => {
    if (isNaN(num2)) {
      // throw new Error("num2 should be a valid number");
      return NaN;
    }
    return num1 + num2;
  };
};
