import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import Btn from '../../../components/buttons/btn';
import useChangeObserver from '../use-change-observer';
import { defaultValues } from '../data';
import s from './creator-panel.module.scss';

const CreatorPanel = ({ save }) => {
  const { getValues } = useFormContext();
  const { isFormChanged } = useChangeObserver({ defaultValues });
  const saveToDrafts = () => {
    const values = getValues();
    save(values);
  };

  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <Btn type="submit">Publish</Btn>
        {isFormChanged && (
          <Btn type="button" onClick={saveToDrafts}>Save</Btn>
        )}
      </div>
    </div>
  );
};

CreatorPanel.propTypes = {
  save: PropTypes.func.isRequired,
};

export default CreatorPanel;
