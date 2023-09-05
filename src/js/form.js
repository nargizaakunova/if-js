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

  // FUNCTION COUNTER
  // function initiateCounter(el, decreaseBtn, increaseBtn, min, max) {}

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

  let currValChildren = childrenCountEl.textContent;

  if (Number(currValChildren) === 0) {
    guestFilterChildrenEl.classList.add('_is-hidden');
    guestFilterSelectEl.classList.add('_is-hidden');
  }

  // INCREASE BTN
  childrenIncreaseBtnEl.addEventListener('click', () => {
    console.log('test');
    const maxNumChildren = 10;
    if (Number(currValChildren) < maxNumChildren) {
      childrenIncrementBtnEL.classList.remove('_inactive');
      childrenIncreaseBtnEl.disabled = false;
      childrenDecreaseBtnEl.disabled = false;
      guestFilterChildrenEl.classList.remove('_is-hidden');
      guestFilterSelectEl.classList.remove('_is-hidden');
      currValChildren = (Number(currValChildren) + 1).toString();
      childrenCountEl.textContent = currValChildren;
      childrenDecreaseBtnEl.classList.remove('_inactive');
    }
    if (Number(currValChildren) === maxNumChildren) {
      childrenIncrementBtnEL.classList.add('_inactive');
      childrenIncreaseBtnEl.disabled = true;
    }
  });

  // DECREASE BTN
  const childrenDecreaseBtnEl = document.querySelector(
    '.guest-filter__children--decrement',
  );

  childrenDecreaseBtnEl.classList.add('_inactive');
  childrenDecreaseBtnEl.classList.add('_inactive');

  childrenDecreaseBtnEl.addEventListener('click', () => {
    console.log('test');
    const minNumChildren = 0;
    if (Number(currValChildren) > minNumChildren) {
      childrenDecreaseBtnEl.classList.remove('_inactive');
      childrenDecreaseBtnEl.disabled = false;
      childrenIncreaseBtnEl.disabled = false;
      guestFilterChildrenEl.classList.remove('_is-hidden');
      guestFilterSelectEl.classList.remove('_is-hidden');
      currValChildren = (Number(currValChildren) - 1).toString();
      childrenCountEl.textContent = currValChildren;
      childrenIncrementBtnEL.classList.remove('_inactive');
      childrenIncrementBtnEL.classList.remove('_inactive');
    }
    if (Number(currValChildren) === minNumChildren) {
      childrenDecreaseBtnEl.classList.add('_inactive');
      childrenDecreaseBtnEl.classList.add('_inactive');
      childrenDecreaseBtnEl.disabled = true;
      guestFilterChildrenEl.classList.add('_is-hidden');
      guestFilterSelectEl.classList.add('_is-hidden');
    }
  });

  // ROOMS LOGIC
}
