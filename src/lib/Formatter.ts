import {
  format,
  isToday,
  isTomorrow,
  isWithinInterval,
  addDays,
  parseISO,
  formatDistanceToNowStrict,
} from "date-fns";

export const formatEventDate = (eventDate: string): string => {
  const event = parseISO(eventDate);
  const now = new Date();

  if (isToday(event)) {
    return formatDistanceToNowStrict(event, { addSuffix: true }).toUpperCase();
  } else if (isTomorrow(event)) {
    return "TOMORROW";
  } else if (isWithinInterval(event, { start: now, end: addDays(now, 7) })) {
    return `${format(event, "EEEE").toUpperCase()}`; // EEEE gives the full name of the day
  } else {
    return format(event, "MMM d").toUpperCase(); // d MMM gives something like "10 Jun"
  }
};

export const priceFormatter = (price: number) => {
  return (10000 / price).toFixed(2).replace(/\.?0+$/, "");
};

export const quantityFormatter = (qty: number, price: number) => {
  return `£${((qty * price) / 100000000).toFixed()}`;
};
