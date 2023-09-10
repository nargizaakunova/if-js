/* result:
[
  [27, 28, 29, 30, 1, 2, 3]
  [4, 5, 6, 7, 8, 9, 10]
  [11, 12, 13, 14, 15, 16, 17]
  [18, 19, 20, 21, 22, 23, 24]
  [25, 26, 27, 28, 29, 30, 1]
]
*/

function getCalendarMonth(
  previousMonthLastDate,
  currentMonthFirstDateIndex,
  currentMonthLastDate,
) {
  const DAYS_IN_WEEK = 7;
  const output = [];
  let currentWeek = [];

  if (currentMonthFirstDateIndex >= DAYS_IN_WEEK) {
    throw new Error('Day should be less than numbers of days in a week');
  }

  // populate previous month dates
  if (currentMonthFirstDateIndex > 0) {
    const previousMonthBeginningDate =
      previousMonthLastDate -
      (DAYS_IN_WEEK - (DAYS_IN_WEEK - currentMonthFirstDateIndex + 1));
    for (let i = previousMonthBeginningDate; i <= previousMonthLastDate; i++) {
      currentWeek.push(i);
    }
  }

  // populate current month dates
  for (let i = 1; i <= currentMonthLastDate; i++) {
    currentWeek.push(i);

    // if week is full, add to the output
    if (currentWeek.length === DAYS_IN_WEEK) {
      output.push(currentWeek);
      currentWeek = [];
    }
  }

  // populate next month if necessary
  if (currentWeek.length) {
    let nextMonthDate = 1;
    while (currentWeek.length < DAYS_IN_WEEK) {
      currentWeek.push(nextMonthDate);
      nextMonthDate += 1;
    }

    output.push(currentWeek);
  }

  return output;
}

export function getCalendarMonthFor(date) {
  const previousMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0,
  ).getDate();
  const currentMonthFirstDateIndex =
    (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;
  const currentMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  return getCalendarMonth(
    previousMonthLastDate,
    currentMonthFirstDateIndex,
    currentMonthLastDate,
  );
}
