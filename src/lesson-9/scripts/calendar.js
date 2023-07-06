console.log('Calendar');

// July 2023
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

//  2023
// const currentMonth = 11; // all 0 index based
// const currentYear = 2023;
const year =
  currentMonth === 0
    ? currentYear - 1
    : currentMonth === 11
    ? currentYear + 1
    : currentYear;
const month = currentMonth === 0 ? 11 : currentMonth;

const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 31 (July)
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const dayOfWeek =
  currentMonth === 0
    ? firstDayOfMonth.getDay() - 1 + daysInWeek
    : firstDayOfMonth.getDay() === 0
    ? 6
    : firstDayOfMonth.getDay() - 1;
const lastDayOfPreviousMonth = new Date(year, month, 0).getDate(); // 30 (June)
const daysInWeek = 7;

function getCalendarForCurrentMonth(daysInMonth, daysInWeek, dayOfWeek) {
  const result = [];
  let currentWeek = [];
  if (dayOfWeek > daysInWeek) {
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

console.log(getCalendarForCurrentMonth(lastDayOfMonth, daysInWeek, dayOfWeek));
