
function daysInMonth(year, month) {
  if (month === 2) {
    if (year % 4 === 0) {
      return 29;
    }
    return 28;
  }
  const days31MonthArray = [1, 3, 5, 7, 8, 10, 12];
  if (days31MonthArray.includes(month)) {
    return 31;
  }
  return 30;
}

export {
  daysInMonth,
};
