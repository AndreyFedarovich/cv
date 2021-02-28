import { useFormContext } from 'react-hook-form';
import cleanDeep from 'clean-deep';
import { isObjectsDeepEqual, isEmptyObject } from '../../helpers/utils.helper';

const filterStack = (values) => {
  const val = { ...values };
  const stack = val.stack.filter(({ isActive }) => isActive);
  val.stack = stack;
  if (!stack.length) delete val.stack;
  return val;
};

const filterValues = (values) => {
  if (isEmptyObject(values)) { return {}; }
  const vals = { ...values };
  return cleanDeep(filterStack(vals));
};

export default function useFilledObserver({ defaultValues }) {
  const { getValues } = useFormContext();
  const values = filterValues(getValues());
  return {
    isFormChanged: !isObjectsDeepEqual(values, cleanDeep(defaultValues)),
  };
}
