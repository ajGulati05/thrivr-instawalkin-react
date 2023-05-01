import "moment-timezone";
import momentTZ from "moment-timezone";
import moment from "moment";

export function getListOfAmericanTimezones() {
  const timeZonesList = momentTZ.tz.names();
  const americanTimeZones = timeZonesList.filter(timezone => timezone.includes("America/"));

  return americanTimeZones;
}

export function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();
  const numberEnding = number => {
    return number > 1 ? "s" : "";
  };
  const number = num => (num > 9 ? "" + num : "0" + num);
  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);
    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }
    const days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
      if (days < 28) {
        return days + " day" + numberEnding(days);
      } else {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }
    const hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }
    const minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }
    return "a few seconds ago";
  };
  return getTime();
}

export function isCurrentUTCDateAfter(compareDate) {
  return moment()
    .utc()
    .isAfter(compareDate);
}

export function isCurrentUTCDateBefore(compareDate) {
  return moment()
    .utc()
    .isBefore(compareDate);
}

export function isCurrentUTCOneHourBefore(compareDate) {
  var value = moment
    .duration(
      moment()
        .utc()
        .diff(compareDate)
    )
    .asMinutes();
  if (value < 60 && isCurrentUTCDateAfter(compareDate)) {
    return true;
  }

  return false;
}

export function convertToTherapistsTimezone(timestamp, timezone) {
  return momentTZ(timestamp)
    .tz(timezone)
    .format("YYYY-MM-DD HH:mm a");
}

export function hasTimeRangeOverlap(newDateRange, existingDateRange) {
  const newDateStart = moment(newDateRange.start);
  const newDateEnd = moment(newDateRange.end);

  const overlap = existingDateRange.every(
    key =>
      !newDateStart.isBetween(moment(key.start), moment(key.end)) &&
      !newDateEnd.isBetween(moment(key.start), moment(key.end)) &&
      !moment(key.start).isBetween(newDateStart, newDateEnd) &&
      !moment(key.end).isBetween(newDateStart, newDateEnd) &&
      newDateRange.start !== key.start &&
      newDateRange.end !== key.start &&
      newDateRange.start !== key.end &&
      newDateRange.end !== key.end
  );

  if (overlap) {
    return false;
  } else {
    return true;
  }
}
