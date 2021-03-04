import React, {
  useRef, forwardRef, createRef,
} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useMenuCloseListener from './use-menu-close-listener';
import useMenuPosition from './use-menu-position';
import useBlurMenu from '../use-blur-menu';
import DropdownCheckbox from '../dropdown-checkbox';
import s from './dropdown-search-menu.module.scss';

const DropdownSearchMenu = forwardRef(({
  isMultiple,
  onSelect,
  options,
  toggleOpen,
  triggerRef,
  scrollRef,
}, ref) => {

  const { menuPosition } = useMenuPosition({
    scrollRef, triggerRef, menuRef: ref,
  });

  useMenuCloseListener({
    menuRef: ref,
    toggleOpen,
    triggerRef,
  });

  const optionsRef = useRef(options.map(() => createRef()));

  return (
    <div className={cn(s.wrap, s[menuPosition])}>
      <div ref={ref} className={s.options}>
        {!options.length
          ? <span className={s.empty}>No results</span>
          : options.map((option, i) => (
            <button
              key={option.value}
              ref={optionsRef.current[i]}
              type="button"
              onClick={() => {
                onSelect(option);
                if (!isMultiple) toggleOpen(false);
              }}
              className={cn(s.option, { [s.active]: option.isActive })}
              onBlur={() => (i === options.length - 1 ? useBlurMenu({
                menuRef: ref,
                toggleOpen,
              }) : null)}
            >
              {isMultiple && <DropdownCheckbox isActive={option.isActive} />}
              {option.value}
            </button>
          ))}
      </div>
    </div>
  );
});

DropdownSearchMenu.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  isMultiple: PropTypes.bool,
  onSelect: PropTypes.func,
  triggerRef: PropTypes.object,
  scrollRef: PropTypes.object,
};

DropdownSearchMenu.defaultProps = {
  isMultiple: false,
  onSelect: null,
  triggerRef: null,
  scrollRef: null,
};

export default DropdownSearchMenu;
