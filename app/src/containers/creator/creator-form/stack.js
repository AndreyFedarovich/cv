import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { stack } from '../../../constatnts/stack.constants';
import { DropdownSearch } from '../../../components/dropdowns/dropdown-search';
import { prepareStackDataToDropdown } from '../../../helpers/data.helper';
import s from './creator-form.module.scss';

const Stack = ({ wrapRef }) => {

  const {
    control, setValue, getValues, errors,
  } = useFormContext();
  const [searchValue, setSearchValue] = useState('');

  const options = prepareStackDataToDropdown(stack);

  const onSelect = (value) => {
    const selectedStack = getValues('stack');

    const idx = selectedStack.findIndex((option) => option === value);
    if (idx < 0) {
      selectedStack.push(value);
      setValue('stack', selectedStack);
      return;
    }
    setValue('stack', selectedStack.filter((option) => option !== value));
  };

  return (
    <>
      <h2 className={s.title}>Stack</h2>
      <Controller
        name="stack"
        defaultValue={[]}
        control={control}
        render={({ name }) => (
          <DropdownSearch
            className={s.fields}
            scrollRef={wrapRef}
            placeholder="Select your stack"
            searchValue={searchValue}
            options={options}
            isMultiple
            onSearch={(e) => setSearchValue(e.target.value)}
            onSelect={onSelect}
            name={name}
            label="Select your stack"
            selected={getValues('stack')}
            error={errors.stack?.message}
          />
        )}
      />
    </>
  );
};

Stack.propTypes = {
  wrapRef: PropTypes.object,
};

Stack.defaultProps = {
  wrapRef: null,
};

export default Stack;
