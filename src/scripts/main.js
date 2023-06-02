console.log('------------------- Lesson 17 -----------------------');

// Sum function
const sum = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

console.log(sum(2)(3));
console.log(sum(5)(2));

// Click paragraphs
const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function changeElColorOnClick(el) {
  el.addEventListener('click', (e) => {
    const currentColor = e.target.style.color;
    const currentColorIndex = colors.indexOf(currentColor);
    let nextColorIndex = currentColorIndex + 1;
    if (nextColorIndex > colors.length - 1) {
      nextColorIndex = 0;
    }
    e.target.style.color = colors[nextColorIndex];
  });
}

for (const item of [text1El, text2El, text3El]) {
  changeElColorOnClick(item);
}