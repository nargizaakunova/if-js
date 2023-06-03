export const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export function changeElColorOnClick(el) {
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
export default (elements) => {
  for (const item of elements) {
    changeElColorOnClick(item);
  }
};
