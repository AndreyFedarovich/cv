import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DropdownSearchTrigger from './dropdown-search-trigger';
import DropdownSearchMenu from './dropdown-search-menu';
import DropdownSearchSelected from './dropdown-search-selected';
import { searchOptions } from './functions.helper';
import s from './dropdown-search.module.scss';

const DropdownSearch = ({
  options,
  isMultiple,
  onSearch,
  onSelect,
  searchValue,
  name,
  label,
  placeholder,
  scrollRef,
  className,
}) => {
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className={cn(s.wrap, className)}>
      <DropdownSearchTrigger
        ref={triggerRef}
        label={label}
        name={name}
        onSearch={onSearch}
        placeholder={placeholder}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        menuRef={menuRef}
      />
      <DropdownSearchMenu
        ref={menuRef}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={searchOptions(searchValue, options)}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        isOpen={isOpen}
      >
        {isMultiple && <DropdownSearchSelected name={name} />}
      </DropdownSearchMenu>

    </div>
  );
};

DropdownSearch.propTypes = {
  options: PropTypes.array.isRequired,
  isMultiple: PropTypes.bool,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  searchValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  scrollRef: PropTypes.object,
  className: PropTypes.string,
};

DropdownSearch.defaultProps = {
  isMultiple: false,
  onSearch: null,
  onSelect: null,
  searchValue: '',
  label: '',
  placeholder: '',
  className: '',
  scrollRef: null,
};

export default DropdownSearch;
