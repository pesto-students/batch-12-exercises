
function parseMs(totalMS) {
  const ms = Math.abs(totalMS);
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor((daysms) / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor((hoursms) / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const seconds = Math.floor((minutesms) / (1000));
  const milliseconds = ms % 1000;
  const positiveOrNegative = totalMS >= 0 ? 1 : -1;
  const timeInDays = {
    days: positiveOrNegative * days,
    hours: positiveOrNegative * hours,
    minutes: positiveOrNegative * minutes,
    seconds: positiveOrNegative * seconds,
    milliseconds: positiveOrNegative * milliseconds,
  };
  return timeInDays;
}

export {
  parseMs,
};
