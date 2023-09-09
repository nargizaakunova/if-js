import { getCalendarMonthFor } from './calendar.js';

export default function calendarFilter() {
  const formInputDateEl = document.querySelector('.form__input--date');
  const calendarEl = document.querySelector('.calendar');
  const currentMonthEl = document.querySelector('.calendar__current-month');
  // const nextMonthEl = document.querySelector('.calendar__next-month');

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

  console.log(getCalendarMonthFor(new Date()));

  function renderCalendarCurrentMonth() {
    // currentMonthEl.innerHTML = `
    //                 <div class="calendar__weekdays">
    //                   <span>Mn</span>
    //                   <span>Tu</span>
    //                   <span>Wd</span>
    //                   <span>Th</span>
    //                   <span>Fr</span>
    //                   <span>St</span>
    //                   <span>Su</span>
    //                 </div>
    //                 <div class="calendar__days">
    //                   <div class="calendar__week">
    //                     <span class="calendar__month-day">d</span>
    //                     <span class="calendar__month-day">5</span>
    //                     <span class="calendar__month-day">6</span>
    //                     <span class="calendar__month-day current-day">7</span>
    //                     <span class="calendar__month-day">8</span>
    //                     <span class="calendar__month-day">9</span>
    //                     <span class="calendar__month-day">10</span>
    //                   </div>
    //                 </div>
    // `;

    const calendarMonthTitleEl = document.createElement('h3');
    calendarMonthTitleEl.classList.add('calendar__month-title');
    calendarMonthTitleEl.textContent = new Date().toLocaleString('default', {
      month: 'long',
    });

    const calendarWeekdaysEl = document.createElement('div');
    calendarWeekdaysEl.classList.add('calendar__weekdays');

    for (let i = 0; i < 7; i++) {
      const weekdayEl = document.createElement('span');
      weekdayEl.textContent = new Date()
        .toLocaleString('default', {
          weekday: 'short',
        })
        .slice(0, 2);
      calendarWeekdaysEl.append(weekdayEl);
    }

    currentMonthEl.append(calendarMonthTitleEl);
    currentMonthEl.append(calendarWeekdaysEl);
  }

  renderCalendarCurrentMonth();
}
