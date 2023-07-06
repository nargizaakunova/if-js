console.log('Calendar');

// July 2023
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

// Feb 2023
// const currentMonth = 1; // Feb
// const currentYear = 2023;

const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 31 (July)
const lastDayOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate(); // 30 (June)
const daysInWeek = 7;
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const dayOfWeek = firstDayOfMonth.getDay() - 1;

function getCalendarForCurrentMonth(daysInMonth, daysInWeek, dayOfWeek) {
  const result = [];
  let currentWeek = [];

  if (dayOfWeek >= daysInWeek) {
    throw new Error('Day should be less than numbers of days in a week');
  }
  if (dayOfWeek !== 0) {
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
  // console.log(currentWeek);
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
