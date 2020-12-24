/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useEffect, useRef, createRef, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import { options } from './data';
import styles from './switch.module.scss';

const Switcher = ({ size }) => {
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);
  const elementsRef = useRef(options.map(() => createRef()));
  const { setMode, mode } = useContext(Context);

  const setSliderPosition = () => {
    const idx = mode === 'light' ? 0 : 1;
    if (options.length > 1 && swiperRef?.current && elementsRef.current[idx]) {
      const { left: parentLeft } = swiperRef.current.getBoundingClientRect();
      const { width, left } = elementsRef.current[idx].current.getBoundingClientRect();
      sliderRef.current.setAttribute('style', `width:${width}px; left:${left - parentLeft}px`);
    }
  };

  useEffect(() => { setSliderPosition(); });

  const onSwitch = (e, value) => {
    e.target.blur();
    setMode(value);
  };

  return (
    <button
      onClick={(e) => onSwitch(e, mode === 'light' ? 'dark' : 'light')}
      ref={swiperRef}
      className={styles[`size-${size}`]}
    >
      <div ref={sliderRef} className={styles.slider} />
      <div className={styles.options}>
        {options.map(({ title, element }, i) => (
          <div className={styles.option} ref={elementsRef.current[i]} key={title}>
            {element}
          </div>
        ))}
      </div>
    </button>
  );
};

Switcher.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
};

Switcher.defaultProps = {
  size: 's',
};

export default Switcher;
