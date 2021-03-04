import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DropdownTrigger from './dropdown-trigger';
import DropdownMenu from './dropdown-menu';
import s from './dropdown.module.scss';

const Dropdown = ({
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
  return (
    <div className={cn(s.wrap, className)}>
      <DropdownTrigger
        ref={triggerRef}
        label={label}
        name={name}
        placeholder={placeholder}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        selected={selected}
        menuRef={menuRef}
      />
      {isOpen && (
        <DropdownMenu
          ref={menuRef}
          triggerRef={triggerRef}
          onSelect={onSelect}
          isMultiple={isMultiple}
          options={options}
          toggleOpen={toggleOpen}
          scrollRef={scrollRef}
        />
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  isMultiple: PropTypes.bool,
  onSelect: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  scrollRef: PropTypes.object,
  className: PropTypes.string,
  selected: PropTypes.string,
};

Dropdown.defaultProps = {
  isMultiple: false,
  onSelect: null,
  label: '',
  placeholder: '',
  className: '',
  selected: '',
  scrollRef: null,
};

export default Dropdown;
