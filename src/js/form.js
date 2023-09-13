import { model as calendarModel } from './calendar/calendar-filter.js';
import { renderAvailableHotels } from './availableHotels.js';
import calendarFilter from './calendar/calendar-filter.js';
import formGuestsFilter from './formGuestsFilter.js';

const formEl = document.querySelector('.top-section__form');
formEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  await renderAvailableHotels(formEl.querySelector('.form__input--city').value);
  document
    .getElementById('availHotels')
    ?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
});

console.log(calendarModel);
calendarFilter();
formGuestsFilter();
