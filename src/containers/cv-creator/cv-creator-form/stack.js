import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { stack } from '../../../constatnts/stack.constants';
import DropdownSearch from '../../../components/inputs/dropdown-search';
import { prepareStackDataToDropdown } from '../../../helpers/data.helper';
import s from './cv-creator-form.module.scss';

const Stack = ({ wrapRef }) => {

  const {
    control, setValue, getValues, errors,
  } = useFormContext();
  const [searchValue, setSearchValue] = useState('');

  const options = getValues('stack') || prepareStackDataToDropdown(stack);

  const onSelect = ({ value }) => {
    const idx = options.findIndex((x) => x.value === value);

    options[idx].isActive = !options[idx].isActive;
    setValue('stack', options);

    // EXAMPLE FOR SINGLE SELECTION:
    // setValue('stack',
    //   options.map((option, i) => {
    //     if (idx === i) {
    //       option.isActive = true;
    //     } else {
    //       option.isActive = false;
    //     }
    //     return option;
    //   }));
  };
  return (
    <>
      <h2 className={s.title}>Stack</h2>
      <Controller
        name="stack"
        defaultValue={options}
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
            onSelect={(value) => onSelect(value)}
            name={name}
            label="Select your stack"
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
