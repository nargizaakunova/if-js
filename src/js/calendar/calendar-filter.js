import { getCalendarMonthFor } from './calendar.js';

export default function calendarFilter() {
  const formDateWrapperEl = document.querySelector('.form__date-wrapper');
  const calendarEl = document.querySelector('.calendar');
  const currentMonthEl = document.querySelector('.calendar__current-month');
  const nextMonthEl = document.querySelector('.calendar__next-month');
  const formDateFieldTitle = document.querySelector(
    '.form__field--date .form__label',
  );
  const startDateCaption = document.getElementById('form__date-start');
  const endDateCaption = document.getElementById('form__date-end');
  const startDateHiddenInput = document.querySelector(`input[name=startDate]`);
  const endDateHiddenInput = document.querySelector(`input[name=endDate]`);

  const model = {
    _startDate: null,
    _endDate: null,
    get startDate() {
      return this._startDate;
    },
    set startDate(val) {
      this._startDate = val;
      if (val) {
        startDateCaption.textContent = val
          .toLocaleString('default', {
            month: 'short',
            weekday: 'short',
            day: '2-digit',
          })
          .replaceAll(',', '');
        startDateHiddenInput.value = val
          .toLocaleString('en-UK', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
          .replaceAll('/', '-');
      } else {
        endDateCaption.textContent = 'Check in';
        startDateHiddenInput.value = '';
      }
    },
    get endDate() {
      return this._endDate;
    },
    set endDate(val) {
      this._endDate = val;
      if (val) {
        endDateCaption.textContent = val
          .toLocaleString('default', {
            month: 'short',
            weekday: 'short',
            day: '2-digit',
          })
          .replaceAll(',', '');
        endDateHiddenInput.value = val
          .toLocaleString('en-UK', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
          .replaceAll('/', '-');
      } else {
        endDateCaption.textContent = 'Check out';
        endDateHiddenInput.value = '';
      }
    },
  };

  function formDateClickHandler() {
    calendarEl.classList.toggle('_is-hidden');
    if (!calendarEl.classList.contains('_is-hidden')) {
      document.addEventListener('click', onClickedOutside);
    }
    if (!formDateWrapperEl.classList.contains('_focused')) {
      formDateWrapperEl.classList.add('_focused');
    } else {
      formDateWrapperEl.classList.remove('_focused');
    }
  }

  formDateWrapperEl.addEventListener('click', formDateClickHandler);
  formDateFieldTitle.addEventListener('click', formDateClickHandler);

  function onClickedOutside(e) {
    if (!e.target.closest('.form__field--date')) {
      calendarEl.classList.add('_is-hidden');
      formDateWrapperEl.classList.remove('_focused');
      document.removeEventListener('click', onClickedOutside);
    }
  }

  // sending CURRENT month and NEXT month as parameters to getCalendarMonthFor function
  const daysOfCurMonth = getCalendarMonthFor(new Date());
  const nextMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1,
  );
  const daysOfNextMonth = getCalendarMonthFor(nextMonth);

  function renderCalendarMonth(
    monthDays,
    month,
    monthWrapper,
    callbackOnDateSelected,
  ) {
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
    calendarDaysEl.addEventListener('click', function daysClickHandler(e) {
      if (e.target.classList.contains('_unavailable')) {
        return;
      }
      callbackOnDateSelected(
        new Date(month.getFullYear(), month.getMonth(), +e.target.textContent),
        e.target,
      );
    });

    let isPrevMonth = true;
    const isCurrentMonth = month.getMonth() === new Date().getMonth();
    const currentDay = new Date().getDate();
    for (let week = 0; week < monthDays.length; week++) {
      const calendarWeekEl = document.createElement('div');
      calendarWeekEl.classList.add('calendar__week');
      calendarDaysEl.append(calendarWeekEl);
      for (let day = 0; day < monthDays[week].length; day++) {
        if (monthDays[week][day] === 1) {
          isPrevMonth = false;
        }

        const daySpanEl = document.createElement('span');
        daySpanEl.classList.add('calendar__month-day');
        daySpanEl.textContent = monthDays[week][day];

        if (isPrevMonth) {
          daySpanEl.classList.add('_unavailable');
        } else if (isCurrentMonth && monthDays[week][day] < currentDay) {
          daySpanEl.classList.add('_unavailable');
        } else {
          daySpanEl.classList.add('_available');
          if (isCurrentMonth && monthDays[week][day] === currentDay) {
            daySpanEl.classList.add('_currentDay');
          }
        }

        calendarWeekEl.append(daySpanEl);
      }
    }

    monthWrapper.append(calendarMonthTitleEl);
    monthWrapper.append(calendarWeekdaysEl);
    monthWrapper.append(calendarDaysEl);
  }

  function handleDaysClicked(date, target) {
    if (model.startDate && model.endDate) {
      model.startDate = null;
      model.endDate = null;
      unselectDays();
      unfillColorBetweenSelectedDays();
    }

    if (!model.startDate) {
      model.startDate = date;
      unselectDays();
      target.classList.add('_day-selected');
    } else {
      if (model.startDate >= date) {
        model.startDate = date;
        unselectDays();
        target.classList.add('_day-selected');
      } else {
        model.endDate = date;
        target.classList.add('_day-selected');
        fillColorBetweenSelectedDays();
        calendarEl.classList.add('_is-hidden');
        formDateWrapperEl.classList.remove('_focused');
      }
    }
  }

  function unselectDays() {
    const daysSelectedSpanEls = document.querySelectorAll('._day-selected');
    Array.from(daysSelectedSpanEls).forEach((daySelected) => {
      daySelected.classList.remove('_day-selected');
    });
  }

  function fillColorBetweenSelectedDays() {
    let selectionMode = false;
    document
      .querySelectorAll('.calendar__month-day._available')
      .forEach((item) => {
        if (item.classList.contains('_day-selected')) {
          selectionMode = !selectionMode;
          return;
        }
        if (selectionMode) {
          item.classList.add('_days-in-between');
        }
      });
  }

  function unfillColorBetweenSelectedDays() {
    document
      .querySelectorAll('.calendar__month-day._available')
      .forEach((item) => {
        item.classList.remove('_days-in-between');
      });
  }

  renderCalendarMonth(
    daysOfCurMonth,
    new Date(),
    currentMonthEl,
    (date, target) => {
      handleDaysClicked(date, target);
    },
  );
  renderCalendarMonth(
    daysOfNextMonth,
    nextMonth,
    nextMonthEl,
    (date, target) => {
      handleDaysClicked(date, target);
    },
  );
}
