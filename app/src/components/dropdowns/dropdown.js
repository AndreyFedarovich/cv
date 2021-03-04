import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Input from '../inputs/input';
import DropdownMenu from './atoms/dropdown-menu';
import DropdownSelected from './atoms/dropdown-selected';
import onBlurMenu from './helpers/blur-menu.helper';
import Caret from '../icons/caret';
import s from './dropdown.module.scss';

export const Dropdown = ({
  options,
  isMultiple,
  onSelect,
  name,
  label,
  placeholder,
  scrollRef,
  className,
  selected,
}) => {
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, toggleOpen] = useState(false);

  const getValue = () => {
    if (isMultiple) return '';
    return selected;
  };

  return (
    <div className={cn(s.root, className)}>
      <Input
        name={name}
        readOnly
        label={label}
        ref={triggerRef}
        placeholder={placeholder}
        value={getValue()}
        onFocus={() => toggleOpen(true)}
        onBlur={(e) => onBlurMenu({ e, menuRef, toggleOpen })}
        icon={<Caret className={isOpen ? s.caretDown : s.caretUp} />}
      />
      <DropdownMenu
        isOpen={isOpen}
        ref={menuRef}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={options}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        selected={selected}
      >
        {isMultiple && (
          <DropdownSelected unselect={onSelect} selected={selected} />
        )}
      </DropdownMenu>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isMultiple: PropTypes.bool,
  scrollRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

Dropdown.defaultProps = {
  scrollRef: null,
  className: '',
  placeholder: '',
  label: '',
  isMultiple: false,
  selected: '',
};

export default Dropdown;
