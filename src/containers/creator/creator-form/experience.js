import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { maskYear } from '../../../helpers/date.helper';
import { months } from '../../../constatnts/ui.constants';
import Checkbox from '../../../components/inputs/checkbox';
import Dropdown from '../../../components/inputs/dropdown';
import Input from '../../../components/inputs/input';
import Btn from '../../../components/buttons/btn';
import s from './creator-form.module.scss';

const Experience = ({ wrapRef }) => {
  const {
    errors, control, register, setValue, getValues,
  } = useFormContext();
  const {
    fields, append, remove,
  } = useFieldArray({
    control,
    name: 'roles',
  });

  const getMonth = (name) => months[getValues(name)]?.value;

  const checkRoleSetDate = (idx) => {
    const isCurrent = getValues(`roles[${idx}].isCurrent`);
    setValue(`roles[${idx}].isCurrent`, !isCurrent);
  };

  return (
    <>
      <h2 className={s.title}>Experience</h2>
      <div className={s.fields}>
        {fields.map(({ id }, idx) => (
          <React.Fragment key={id}>
            <div className={s.group}>
              {idx > 0 && (
                <button
                  className={s.cancel}
                  type="button"
                  onClick={() => remove(idx)}
                >Remove
                </button>
              )}
              <div className={s.field}>
                <Input
                  label="Position"
                  placeholder="Position"
                  className={s.input}
                  ref={register}
                  name={`roles[${idx}].position`}
                />
              </div>
              <div className={s.field}>
                <Input
                  label="Company"
                  placeholder="Company"
                  className={s.input}
                  name={`roles[${idx}].company`}
                  ref={register}
                />
                <Input
                  label="Location"
                  placeholder="Location"
                  className={s.input}
                  ref={register}
                  name={`roles[${idx}].location`}
                />
              </div>

              <div className={s.labledField}>
                <span className={s.label}>Start date *</span>
                <div className={s.field}>
                  <Controller
                    name={`roles[${idx}].startMonth`}
                    defaultValue={null}
                    control={control}
                    render={({ name }) => (
                      <Dropdown
                        scrollRef={wrapRef}
                        className={s.input}
                        placeholder="Month"
                        selected={getMonth(name)}
                        options={months}
                        name={name}
                        onSelect={({ key }) => setValue(name, key)}
                        error={errors[name]?.message}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name={`roles[${idx}].startYear`}
                    render={({ name, onChange }) => (
                      <Input
                        placeholder="Year"
                        className={s.input}
                        name={name}
                        value={getValues(name)}
                        onChange={(e) => onChange(maskYear(e.target.value))}
                      />
                    )}
                  />
                </div>
              </div>
              <div className={s.field}>
                <Controller
                  name={`roles[${idx}].isCurrent`}
                  defaultValue={null}
                  control={control}
                  render={({ name }) => (
                    <Checkbox
                      label="I`m currently working in this role"
                      name={name}
                      isActive={getValues(name)}
                      onClick={() => checkRoleSetDate(idx)}
                    />
                  )}
                />
              </div>
              {!getValues(`roles[${idx}].isCurrent`) && (
                <div className={s.labledField}>
                  <span className={s.label}>End date *</span>
                  <div className={s.field}>
                    <Controller
                      name={`roles[${idx}].endMonth`}
                      defaultValue={null}
                      control={control}
                      render={({ name }) => (
                        <Dropdown
                          scrollRef={wrapRef}
                          className={s.input}
                          placeholder="Month"
                          selected={getMonth(name)}
                          options={months}
                          name={name}
                          onSelect={({ key }) => setValue(name, key)}
                          error={errors[name]?.message}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name={`roles[${idx}].endYear`}
                      render={({ name, onChange }) => (
                        <Input
                          placeholder="Year"
                          className={s.input}
                          name={name}
                          value={getValues(name)}
                          onChange={(e) => onChange(maskYear(e.target.value))}
                        />
                      )}
                    />
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
        <div className={s.field}>
          <Btn
            onClick={() => append({})}
            type="button"
          >
            Add experience
          </Btn>
        </div>
      </div>
    </>
  );
};

Experience.propTypes = {
  wrapRef: PropTypes.object,
};

Experience.defaultProps = {
  wrapRef: null,
};
export default Experience;
