export default function form() {
  // DOM ELEMENTS:
  const guestsInputFieldEl = document.querySelector('.form__input--guests');
  const guestFilterEl = document.querySelector('.guest-filter');

  // Get input and click
  guestsInputFieldEl.addEventListener('click', () => {
    guestFilterEl.classList.toggle('_is-hidden');
  });

  // Click outside of Guest Filter:
  document.addEventListener('click', (e) => {
    console.log(e.target);
    if (!e.target.closest('.form__field--guests')) {
      guestFilterEl.classList.add('_is-hidden');
    }
  });

  // // PREVENTING RELOADING of PAGE, FOR BUTTONS + -
  // document.querySelectorAll('.guest-filter__button').forEach((button) => {
  //   button.addEventListener('click', () => {
  //     console.log(123);
  //   });
  // });
  //
  // // PREVENTING RELOADING of PAGE, FOR Select btn
  // document
  //   .querySelector('.guest-filter__select--button')
  //   .addEventListener('click', () => {
  //     console.log(321);
  //   });

  // ADULTS LOGIC
  // CHILDREN LOGIC
  // const childrenDecreaseBtnEl = document.querySelector(
  //   '.guest-filter__button--decrement',
  // );
  const childrenIncreaseBtnEl = document.querySelector(
    '.guest-filter__children--increment',
  );
  const childrenCountEl = document.querySelector(
    '.guest-filter__count--children',
  );
  const guestFilterChildrenEl = document.querySelector(
    '.guest-filter__children',
  );
  const guestFilterSelectEl = document.querySelector('.guest-filter__select');
  const childrenIncrementBtnEL = document.querySelector(
    '.guest-filter__children--increment',
  );

  if (childrenCountEl.textContent === '0') {
    guestFilterChildrenEl.classList.add('_is-hidden');
    guestFilterSelectEl.classList.add('_is-hidden');
  }

  childrenIncreaseBtnEl.addEventListener('click', () => {
    console.log('test');
    const maxNumChildren = 10;
    if (Number(childrenCountEl.textContent) < maxNumChildren) {
      childrenCountEl.textContent = (
        Number(childrenCountEl.textContent) + 1
      ).toString();
    }
    if (Number(childrenCountEl.textContent) === 10) {
      childrenIncrementBtnEL.style.color = 'grey';
      childrenIncrementBtnEL.style.borderColor = 'grey';
    }
    guestFilterChildrenEl.classList.remove('_is-hidden');
    guestFilterSelectEl.classList.remove('_is-hidden');
  });

  // ROOMS LOGIC
}
