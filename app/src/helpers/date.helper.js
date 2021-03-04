import { isAfter, isValid, formatDistance } from 'date-fns';
import { months } from '../constatnts/ui.constants';
import { isNumber } from './utils.helper';

export const getStart = (startMonth, startYear) => {
  const month = months[startMonth]?.shortValue
    ? months[startMonth]?.shortValue : '';
  const year = startYear || '';
  const separator = month || year ? ' - ' : '';
  return `${month} ${year} ${separator}`;
};

export const getStartDate = (startMonth, startYear) => {
  if (!startMonth && startMonth !== 0) return null;
  return new Date(startYear, startMonth);
};

export const getEndDate = (endMonth, endYear, isCurrent) => {
  if (isCurrent) return new Date();
  if (!endMonth && endMonth !== 0) return null;
  return new Date(endYear, endMonth);
};

export const getEnd = (endMonth, endYear, isCurrent) => {
  const month = months[endMonth]?.shortValue
    ? months[endMonth]?.shortValue : '';
  const year = endYear || '';
  return isCurrent ? 'present' : (`${month} ${year} `);
};

export const getPeriod = (start, end) => {
  if (!start
     || !end
     || isAfter(start, end)
     || !isValid(start)
     || !isValid(end)
  ) return null;
  return formatDistance(start, end);
};

export const maskYear = (value) => {
  if (value.length <= 4 && isNumber(value)) {
    return value;
  }
  return value.slice(0, -1);

};
