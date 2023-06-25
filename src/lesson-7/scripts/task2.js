console.log('------------------------Task 2 ---------------------');
// Task 2
const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4; // в моем примере понедельник равен 0. У вас может отличаться
const checkIn = 2;
const checkOut = 7;

function getCalendarMonth(
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkIn,
  checkOut,
) {
  const calendarArrBeforeTransformation = getCalendarForCurrentMonth(
    daysInMonth,
    daysInWeek,
    dayOfWeek,
  );
  const transformedData = transformCalendarArr(
    calendarArrBeforeTransformation,
    checkIn,
    checkOut,
  );
  return transformedData;
}

function getCalendarForCurrentMonth(daysInMonth, daysInWeek, dayOfWeek) {
  const result = [];
  let currentWeek = [];
  let startingDay = daysInMonth - dayOfWeek + 1;
  const cellsQuantity = Math.ceil(daysInMonth / daysInWeek) * daysInWeek;
  if (dayOfWeek >= daysInWeek) {
    throw new Error('Day should be less than numbers of days in a week');
  }
  for (let i = 1; i <= cellsQuantity; i++) {
    if (startingDay > daysInMonth) {
      startingDay = 1;
    }

    currentWeek.push(startingDay);
    startingDay++;
    if (currentWeek.length === daysInWeek) {
      result.push(currentWeek);
      currentWeek = [];
    }
  }
  return result;
}

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
      weekArr.push({
        dayOfMonth: day,
        notCurrentMonth: !isCurrentMonth,
        selectedDay: isSelectedDay,
      });
    });
    result.push(weekArr);
  });
  return result;
}

console.log(
  getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, checkIn, checkOut),
);
