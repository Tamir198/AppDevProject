const weekDays = ["sunday", "monday","tuesday", "wednesday","thursday", "friday","saturday"]


const isBetweenDates = (dateToCheck, fromTime, toTime) => {
  const dateToCheckTime = dateToCheck.getTime();
  return dateToCheckTime > fromTime.getTime() && dateToCheckTime < toTime.getTime()
}

const shouldShowAdNow = (date, days) => {
  const currDay = weekDays[date.getDay()];
  if (!(currDay in days)) return false;

  const {fromHour,toHour} = days[currDay];
  const currHour = date.getHours();
  return (currHour >= fromHour && currHour < toHour);
}

export default {
  isBetweenDates,
  shouldShowAdNow
}
