export default function form() {
  // DOM ELEMENTS:
  const guestsInputFieldEl = document.querySelector('.form__input--guests');
  const guestFilterEl = document.querySelector('.guest-filter');

  // adults
  const adultsDecreaseBtnEl = document.querySelector(
    '.guest-filter__adults--decrement',
  );
  const adultsIncreaseBtnEl = document.querySelector(
    '.guest-filter__adults--increment',
  );
  const adultsCountEl = document.querySelector('.guest-filter__count--adults');

  // children
  const childrenDecreaseBtnEl = document.querySelector(
    '.guest-filter__children--decrement',
  );
  const childrenIncreaseBtnEl = document.querySelector(
    '.guest-filter__children--increment',
  );
  const childrenCountEl = document.querySelector(
    '.guest-filter__count--children',
  );
  const guestFilterChildrenEl = document.querySelector(
    '.guest-filter__children',
  );
  // const guestFilterSelectEl = document.querySelector('.guest-filter__select');

  // rooms
  const roomsDecreaseBtnEl = document.querySelector(
    '.guest-filter__rooms--decrement',
  );
  const roomsIncreaseBtnEl = document.querySelector(
    '.guest-filter__rooms--increment',
  );
  const roomsCountEl = document.querySelector('.guest-filter__count--rooms');

  // Get Guest Input and click
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

  // COUNTER GENERIC FUNCTION
  function initiateCounter({
    el,
    decreaseBtn,
    increaseBtn,
    min,
    max,
    optionalElementsToShow = [],
    onDecrease,
    onIncrease,
  }) {
    let currVal = el.textContent;

    // Initial state setup
    if (Number(currVal) === min) {
      decreaseBtn.classList.add('_inactive');
      decreaseBtn.disabled = true;
      optionalElementsToShow.forEach((e) => e.classList.add('_is-hidden'));
    }

    // Increase Button
    increaseBtn.addEventListener('click', () => {
      if (Number(currVal) < max) {
        decreaseBtn.classList.remove('_inactive');
        increaseBtn.disabled = false;
        decreaseBtn.disabled = false;
        optionalElementsToShow.forEach((e) => e.classList.remove('_is-hidden'));
        currVal = (Number(currVal) + 1).toString();
        el.textContent = currVal;
      }
      if (Number(currVal) === max) {
        increaseBtn.classList.add('_inactive');
        increaseBtn.disabled = true;
      }

      if (onIncrease) {
        onIncrease(currVal);
      }
    });

    // Decrease Button
    decreaseBtn.addEventListener('click', () => {
      if (Number(currVal) > min) {
        decreaseBtn.classList.remove('_inactive');
        increaseBtn.classList.remove('_inactive');
        increaseBtn.disabled = false;
        decreaseBtn.disabled = false;
        currVal = (Number(currVal) - 1).toString();
        el.textContent = currVal;
      }
      if (Number(currVal) === min) {
        decreaseBtn.classList.add('_inactive');
        decreaseBtn.disabled = true;
        optionalElementsToShow.forEach((e) => e.classList.add('_is-hidden'));
      }

      if (onDecrease) {
        onDecrease(currVal);
      }
    });
  }

  // INITIATE COUNTER FOR ADULTS
  initiateCounter({
    el: adultsCountEl,
    decreaseBtn: adultsDecreaseBtnEl,
    increaseBtn: adultsIncreaseBtnEl,
    min: 1,
    max: 30,
  });

  // INITIATE COUNTER FOR CHILDS
  initiateCounter({
    el: childrenCountEl,
    decreaseBtn: childrenDecreaseBtnEl,
    increaseBtn: childrenIncreaseBtnEl,
    min: 0,
    max: 10,
    optionalElementsToShow: [guestFilterChildrenEl],
    onDecrease: (curVal) => {
      addSelects(curVal);
    },
    onIncrease: (curVal) => {
      console.log('decreased');
      addSelects(curVal);
    },
  });

  // INITIATE COUNTER FOR ROOMS
  initiateCounter({
    el: roomsCountEl,
    decreaseBtn: roomsDecreaseBtnEl,
    increaseBtn: roomsIncreaseBtnEl,
    min: 1,
    max: 30,
  });

  const selectedAges = new Array(10).fill(0);

  console.log(selectedAges);

  function addSelects(curValue) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('guest-filter__select');
    for (let i = 0; i < +curValue; i++) {
      const selectEl = document.createElement('select');
      selectEl.classList.add('guest-filter__select--button', '_custom-select');
      for (let j = 0; j <= 17; j++) {
        const optionEl = document.createElement('option');
        optionEl.value = j;
        optionEl.textContent = `${j} years old`;
        selectEl.append(optionEl);
      }

      selectEl.onchange = (event) => {
        selectedAges[i] = event.target.value;
      };

      selectEl.value = selectedAges[i];
      wrapper.append(selectEl);
    }

    const guestFilterSelectEl = document.querySelector('.guest-filter__select');
    guestFilterSelectEl.parentNode.replaceChild(wrapper, guestFilterSelectEl);
  }
}