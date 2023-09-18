import { model as calendarModel } from './calendar/calendar-filter.js';
import { renderAvailableHotels } from './availableHotels.js';
import calendarFilter from './calendar/calendar-filter.js';
import formGuestsFilter from './formGuestsFilter.js';
import { selectedAges } from './formGuestsFilter.js';

const formEl = document.querySelector('.top-section__form');
formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchCity = document.getElementById('form__input--city').value;
  const startDate = calendarModel.startDate?.getTime();
  const endDate = calendarModel.endDate?.getTime();
  const adultsCount = document.getElementById('form__adults-span').textContent;
  const childrenCount = selectedAges
    .slice(0, +document.getElementById('form__children-span').textContent)
    .join(',');
  const roomsCount = document.getElementById('form__rooms-span').textContent;

  if (searchCity === '') {
    alert('Please choose your destination');
    return;
  }

  if (!startDate && !endDate) {
    alert('Please pick dates.');
    return;
  }

  if (+adultsCount === 0 && childrenCount !== '') {
    alert('Children are not allowed without adult accompaniment.');
    return;
  }

  if (+adultsCount === 0 && childrenCount === '') {
    alert('Please add guests');
    return;
  }

  await renderAvailableHotels({
    searchCity,
    startDate,
    endDate,
    adultsCount,
    childrenCount,
    roomsCount,
  });
  document
    .getElementById('availHotels')
    ?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
});

calendarFilter();
formGuestsFilter();
