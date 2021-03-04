import React, { useRef, forwardRef, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useMenuCloseListener from '../../hooks/use-menu-listener';
import useMenuPosition from '../../hooks/use-menu-position';
import DropdownOption from '../dropdown-option';
import s from './dropdown-menu.module.scss';

const DropdownMenu = forwardRef(
  (
    {
      isOpen,
      isMultiple,
      onSelect,
      options,
      toggleOpen,
      triggerRef,
      scrollRef,
      children,
      selected,
    },
    ref,
  ) => {
    const { menuPosition } = useMenuPosition({
      menuRef: ref,
      scrollRef,
      triggerRef,
      isOpen,
    });

    useMenuCloseListener({
      menuRef: ref,
      toggleOpen,
      triggerRef,
    });

    const optionsRef = useRef(
      options.map(() => createRef()),
    );
    return (
      <div className={s.root}>
        <div className={cn(s.wrap, s[menuPosition])}>
          {isOpen && (
            <div ref={ref} className={s.options}>
              {!options.length ? (
                <span className={s.empty}>No results</span>
              ) : (
                options.map((option, i) => (
                  <DropdownOption
                    // eslint-disable-next-line react/no-array-index-key
                    key={option + i}
                    ref={optionsRef.current[i]}
                    option={option}
                    options={options}
                    onSelect={onSelect}
                    toggleOpen={toggleOpen}
                    isActive={selected.includes(option)}
                    isMultiple={isMultiple}
                    index={i}
                    menuRef={ref}
                  />
                ))
              )}
            </div>
          )}
        </div>
        {children}
      </div>
    );
  },
);

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMultiple: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  triggerRef: PropTypes.PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  scrollRef: PropTypes.PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  children: PropTypes.node.isRequired,
  selected: PropTypes.array,
};

DropdownMenu.defaultProps = {
  isMultiple: false,
  scrollRef: null,
  selected: [],
};

export default DropdownMenu;
