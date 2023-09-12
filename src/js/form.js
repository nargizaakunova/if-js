import { model as calendarModel } from './calendar/calendar-filter.js';
import { renderAvailableHotels } from './availableHotels.js';

const formEl = document.querySelector('.top-section__form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  renderAvailableHotels(formEl.querySelector('.form__input--city').value);
});

console.log(calendarModel);
