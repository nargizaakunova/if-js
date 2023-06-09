console.log('------------------------Calendar-----------------');

// July 2023
const date = new Date();
const currentMonth = date.getMonth(); // 6 (July) ---> 0 based
const currentYear = date.getFullYear(); // 2023

const year =
  currentMonth === 0
    ? currentYear - 1
    : currentMonth === 11
    ? currentYear + 1
    : currentYear;
const month = currentMonth === 0 ? 11 : currentMonth;

const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 31 (July)
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 1 (July)
const daysInWeek = 7; // 7 days in a week

const dayOfWeek =
  currentMonth === 0
    ? firstDayOfMonth === 0
      ? 6
      : firstDayOfMonth - 1
    : firstDayOfMonth === 0
    ? 6
    : firstDayOfMonth - 1;

const lastDayOfPreviousMonth =
  currentMonth === 0
    ? new Date(year, month, 0).getDate() + 1
    : new Date(year, month, 0).getDate(); // 30 (June)

const checkIn = 2;
const checkOut = 7;
const today = new Date().getDate();

function getCalendarForCurrentMonth(daysInMonth, daysInWeek, dayOfWeek) {
  const result = [];
  let currentWeek = [];
  if (dayOfWeek >= daysInWeek) {
    throw new Error('Day should be less than numbers of days in a week');
  }

  if (dayOfWeek !== 0 && dayOfWeek !== 7) {
    let padCounter = dayOfWeek;
    for (let i = 1; i <= dayOfWeek; i++) {
      currentWeek.push(lastDayOfPreviousMonth - padCounter + 1);
      padCounter--;
    }
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (currentWeek.length !== daysInWeek) {
      currentWeek.push(i);
    } else {
      result.push(currentWeek);
      currentWeek = [];
      currentWeek.push(i);
    }
  }

  if (currentWeek.length === daysInWeek) {
    result.push(currentWeek);
  }

  if (currentWeek.length !== daysInWeek) {
    for (let i = 1; i <= daysInWeek; i++) {
      if (currentWeek.length !== daysInWeek) {
        currentWeek.push(i);
      } else {
        result.push(currentWeek);
        currentWeek = [];
      }
    }
  }
  return result;
}

const calendarForCurrentMonth = getCalendarForCurrentMonth(
  lastDayOfMonth,
  daysInWeek,
  dayOfWeek,
);
console.log(calendarForCurrentMonth);

function transformCalendarArr(calendarArr, checkIn, checkOut) {
  let isCurrentMonth = false;
  const result = [];
  calendarArr.forEach((week) => {
    const weekArr = [];
    week.forEach((day) => {
      // console.log(day);
      if (day === 1) {
        if (!isCurrentMonth) {
          isCurrentMonth = true;
        } else {
          isCurrentMonth = false;
        }
      }
      let isSelectedDay = false;
      if (day >= checkIn && day <= checkOut) {
        isSelectedDay = true;
      }
      let isCurrentDay = false;
      if (day === today && isCurrentMonth) {
        isCurrentDay = true;
      }
      weekArr.push({
        dayOfMonth: day,
        notCurrentMonth: !isCurrentMonth,
        selectedDay: isSelectedDay,
        currentDay: isCurrentDay,
      });
    });
    result.push(weekArr);
  });
  return result;
}

console.log(transformCalendarArr(calendarForCurrentMonth, checkIn, checkOut));
