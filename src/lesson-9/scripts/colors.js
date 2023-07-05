const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        const color = this.data[index];
        index++;
        if (index > this.data.length - 1) {
          index = 0;
        }
        return { value: color };
      },
    };
  },
};

const changeStyle = (id) => {
  const iterator = colors[Symbol.iterator]();
  const element = document.getElementById(id);

  element.addEventListener('click', (event) => {
    event.target.style.color = iterator.next().value;
  });
};

// Attach the changeStyle function to each paragraph
changeStyle('text1');
changeStyle('text2');
changeStyle('text3');

// Here I just checked if my object is indeed iterable:
let i = 0;
for (const item of colors) {
  console.log(item);
  i++;
  if (i === 5) {
    break;
  }
}
