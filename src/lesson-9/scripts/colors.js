const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');

function changeElColorOnClick(el) {
  el.addEventListener('click', (e) => {
    const currentColor = e.target.style.color;
    // console.log(currentColor);
    const currentColorIndex = colors.indexOf(currentColor);
    // console.log(currentColorIndex);
    let nextColorIndex = currentColorIndex + 1;
    if (nextColorIndex > colors.length - 1) {
      nextColorIndex = 0;
    }
    e.target.style.color = colors[nextColorIndex];
  });
}

changeElColorOnClick(text1El);
changeElColorOnClick(text2El);
changeElColorOnClick(text3El);
