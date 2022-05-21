const weekDays = ["sunday", "monday","tuesday", "wednesday","thursday", "friday","saturday"]


exports.isBetweenDates = (dateToCheck, fromTime, toTime) => {
  const dateToCheckTime = dateToCheck.getTime();
  return dateToCheckTime > fromTime.getTime() && dateToCheckTime < toTime.getTime()
}

exports.shouldShowAdNow = (date, days) => {
  const currDay = weekDays[date.getDay()];
  if (!(currDay in days)) return false;

  const {fromHour,toHour} = days[currDay];
  const currHour = date.getHours();
  return (currHour >= fromHour && currHour < toHour);
}

  
