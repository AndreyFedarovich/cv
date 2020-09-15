/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './switch.module.scss';

const Switcher = ({
  options, active, setActive, size,
}) => {
  const swiperRef = useRef(null);
  const sliderRef = useRef(null);
  const elementsRef = useRef(options.map(() => createRef()));
  const setSliderPosition = (optionIndex) => {
    if (options.length > 1 && swiperRef && swiperRef.current && elementsRef.current[optionIndex]) {
      const { left: parentLeft } = swiperRef.current.getBoundingClientRect();
      const { width, left } = elementsRef.current[optionIndex].current.getBoundingClientRect();
      sliderRef.current.setAttribute('style', `width:${width}px; left:${left - parentLeft}px`);
    }
  };
  useEffect(() => {
    setSliderPosition(active);
  });
  const onSwitch = (e, optionIndex) => {
    e.target.blur();
    setActive(optionIndex);
  };
  return (
    <button
      onClick={(e) => onSwitch(e, active === 0 ? 1 : 0)}
      ref={swiperRef}
      className={styles[`size-${size}`]}
    >
      <div ref={sliderRef} className={styles.slider} />
      <div className={styles.options}>
        {options.map(({ title, element }, i) => (
          <div
            className={cn(styles.option, { [styles.active]: i === active })}
            ref={elementsRef.current[i]}
            key={title}
          >
            {element}
          </div>
        ))}
      </div>
    </button>
  );
};

Switcher.propTypes = {
  options: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['s', 'm']),
};

Switcher.defaultProps = {
  size: 's',
};

export default Switcher;
