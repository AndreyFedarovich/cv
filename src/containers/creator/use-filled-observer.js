import { useFormContext } from 'react-hook-form';
import { stack as stackList } from '../../constatnts/stack.constants';

const fieldsHasFilled = (fields = []) => {
  if (!fields.length) return false;
  return fields.some((field) => !!field);
};

const deepFieldsHasFilled = (fields = []) => {
  if (!fields) return false;
  return fields.some((field) => (
    fieldsHasFilled(Object.values(field))));
};

export default function useFilledObserver() {
  const { getValues } = useFormContext();
  const {
    name, surname, position, location, roles,
    phoneNumber, email, summary, stack,
  } = getValues();

  const selectedStack = stack?.map(({ value, isActive }) => {
    if (isActive) return value;
    return null;
  }).filter(Boolean);
  const options = stackList.filter(({ value }) => selectedStack?.includes(value));

  return {
    isFormFilled:
      fieldsHasFilled([name, surname, position, location, phoneNumber, email]) || deepFieldsHasFilled(summary)
      || deepFieldsHasFilled(roles)
      || !!options.length,

    personalInfo: {
      name,
      surname,
      position,
      location,
      isFilled: fieldsHasFilled([name, surname, position, location]),
    },
    contacts: {
      phoneNumber,
      email,
      isFilled: fieldsHasFilled([phoneNumber, email]),
    },
    about: {
      summary,
      isFilled: deepFieldsHasFilled(summary),
    },
    experience: {
      roles,
      isFilled: deepFieldsHasFilled(roles),
    },
    stack: {
      options,
      isFilled: !!options.length,
    },
  };

}
