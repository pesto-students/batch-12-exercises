function formattedTimePassed(durationPassed, time, timeType) {
  const timeTypePassed = durationPassed / time;
  return timeTypePassed > 1
    ? `${timeTypePassed} ${timeType} ago`
    : `${timeTypePassed} ${timeType.substring(0, timeType.length - 1)} ago`;
}

function timeWas(currentTime, now) {
  const NOW = now || 1516816290;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const durationPassed = NOW - currentTime;

  if (durationPassed < SECONDS) {
    return 'just now';
  }
  if (durationPassed < MINUTES) {
    return formattedTimePassed(durationPassed, SECONDS, 'seconds');
  }
  if (durationPassed < HOURS) {
    return formattedTimePassed(durationPassed, MINUTES, 'minutes');
  }
  if (durationPassed < DAYS) {
    return formattedTimePassed(durationPassed, HOURS, 'hours');
  }
  if (durationPassed < WEEKS) {
    return formattedTimePassed(durationPassed, DAYS, 'days');
  }
  if (durationPassed < MONTHS) {
    return formattedTimePassed(durationPassed, WEEKS, 'weeks');
  }
  if (durationPassed < YEARS) {
    return formattedTimePassed(durationPassed, MONTHS, 'months');
  }
  return formattedTimePassed(durationPassed, YEARS, 'years');
}

export {
  timeWas,
};
