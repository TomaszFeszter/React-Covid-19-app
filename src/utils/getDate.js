export const getCurrentDate = () => {
  const currentDateInMs = Date.now();
  const today = new Date(currentDateInMs);
  const yearMonthDayFormat = today.toISOString().split("T")[0];
  return yearMonthDayFormat;
};

export const getPreviousWeekDate = () => {
  const currentDateInMs = Date.now();
  const yesterday = new Date(currentDateInMs - 86400000 * 7);
  const yearMonthDayFormat = yesterday.toISOString().split("T")[0];
  return yearMonthDayFormat;
};
