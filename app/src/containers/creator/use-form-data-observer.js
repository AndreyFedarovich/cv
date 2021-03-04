import { useFormContext } from 'react-hook-form';
import cleanDeep from 'clean-deep';
import { stack as stackList } from '../../constatnts/stack.constants';
import { isEmptyObject } from '../../helpers/utils.helper';

export default function useFormDataObserver() {
  const { getValues } = useFormContext();
  const formData = getValues();
  console.log('formData: ', formData);
  const {
    name, lastname, position, location, roles,
    phoneNumber, email, summary, stack,
  } = formData;

  const options = stackList.filter(({ value }) => stack?.includes(value));

  return {
    isFormFilled: !isEmptyObject(cleanDeep(formData)),
    personalInfo: {
      name,
      lastname,
      position,
      location,
      isFilled: !!cleanDeep([name, lastname, position, location]).length,
    },
    contacts: {
      phoneNumber,
      email,
      isFilled: !!cleanDeep([phoneNumber, email]).length,
    },
    about: {
      summary,
      isFilled: !!cleanDeep(summary).length,
    },
    experience: {
      roles,
      isFilled: !!cleanDeep(roles, {
        cleanValues: [false],
      }).length,
    },
    stack: {
      options,
      isFilled: !!cleanDeep(stack).length,
    },
  };

}
