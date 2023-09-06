function getTimePassed(ms) {
  let seconds = ms / 1000;

  if (seconds < 60) return `${seconds.toFixed()}s ago`;

  let minutes = seconds / 60;
  if (minutes < 60) return `${minutes.toFixed()}min ago`;

  let hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed()}hrs ago`;

  let days = hours / 24;
  if (days < 7) return `${days.toFixed()}days ago`;

  let weeks = days / 7;
  if (weeks < 4) return `${weeks.toFixed()}wks ago`;

  let months = days / 30;
  if (months < 12) return `${months.toFixed()}months ago`;

  let years = days / 365;
  return `${years.toFixed()}yrs ago`;
}

function getTimePassedDiff(postedDate) {
  let timePassed = new Date().getTime() - new Date(postedDate).getTime();
  return getTimePassed(timePassed);
}

module.exports = { getTimePassed, getTimePassedDiff };
