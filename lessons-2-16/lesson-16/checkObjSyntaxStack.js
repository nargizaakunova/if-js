function checkObjSyntaxStack(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push(str[i]);
    } else if (str[i] === '}' && stack.length > 0) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(checkObjSyntaxStack('{user: {name: "John", age: 21}}'));
console.log(checkObjSyntaxStack('{user: {name: }{"John", age: 21{}}'));
