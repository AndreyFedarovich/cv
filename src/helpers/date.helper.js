function DaysInMonth(endUTC) {
  const monthStart = new Date(endUTC.getFullYear(), endUTC.getMonth(), 1);
  const monthEnd = new Date(endUTC.getFullYear(), endUTC.getMonth() + 1, 1);
  return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
}

export const getPeriod = (start, end) => {
  // convert to UTC
  const endUTC = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()));
  const startUTC = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));

  let days = endUTC.getDate() - startUTC.getDate();
  if (days < 0) {
    endUTC.setMonth(endUTC.getMonth() - 1);
    days += DaysInMonth(endUTC);
  }

  let months = endUTC.getMonth() - startUTC.getMonth();
  if (months < 0) {
    endUTC.setFullYear(endUTC.getFullYear() - 1);
    months += 12;
  }

  const years = endUTC.getFullYear() - startUTC.getFullYear();
  const yAppendix = years > 1 ? ' years' : ' year';
  const mAppendix = months > 1 ? ' months' : ' month';

  if (years === 0 && months === 0) {
    return null;
  }
  return `${years > 1 ? `${years + yAppendix}, ` : ''}${months}${mAppendix}`;
};
