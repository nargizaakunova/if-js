import { getCalendarMonthFor } from './calendar.js';

export default function calendarFilter() {
  const formInputDateEl = document.querySelector('.form__input--date');
  const calendarEl = document.querySelector('.calendar');
  const currentMonthEl = document.querySelector('.calendar__current-month');
  const nextMonthEl = document.querySelector('.calendar__next-month');

  formInputDateEl.addEventListener('click', () => {
    if (calendarEl.classList.contains('_is-hidden')) {
      document.addEventListener('click', onClickedOutside);
    }
    calendarEl.classList.toggle('_is-hidden');
  });

  function onClickedOutside(e) {
    if (!e.target.closest('.form__field--date')) {
      calendarEl.classList.add('_is-hidden');
      document.removeEventListener('click', onClickedOutside);
    }
  }

  const daysOfCurMonth = getCalendarMonthFor(new Date());
  const nextMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1,
  );
  const daysOfNextMonth = getCalendarMonthFor(nextMonth);

  function renderCalendarMonth(monthDays, month, monthWrapper) {
    const calendarMonthTitleEl = document.createElement('h3');
    calendarMonthTitleEl.classList.add('calendar__month-title');
    calendarMonthTitleEl.textContent = month.toLocaleString('default', {
      month: 'long',
    });

    const calendarWeekdaysEl = document.createElement('div');
    calendarWeekdaysEl.classList.add('calendar__weekdays');

    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const weekdayEl = document.createElement('span');
      weekdayEl.textContent = daysOfWeek[i];
      calendarWeekdaysEl.append(weekdayEl);
    }

    const calendarDaysEl = document.createElement('div');
    calendarDaysEl.classList.add('calendar__days');

    for (let week = 0; week < monthDays.length; week++) {
      const calendarWeekEl = document.createElement('div');
      calendarWeekEl.classList.add('calendar__week');
      calendarDaysEl.append(calendarWeekEl);
      for (let day = 0; day < monthDays[week].length; day++) {
        const daySpanEl = document.createElement('span');
        daySpanEl.classList.add('calendar__month-day');
        daySpanEl.textContent = monthDays[week][day];
        calendarWeekEl.append(daySpanEl);
      }
    }

    monthWrapper.append(calendarMonthTitleEl);
    monthWrapper.append(calendarWeekdaysEl);
    monthWrapper.append(calendarDaysEl);
  }

  renderCalendarMonth(daysOfCurMonth, new Date(), currentMonthEl);
  renderCalendarMonth(daysOfNextMonth, nextMonth, nextMonthEl);
}
