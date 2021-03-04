import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DropdownSelected from './atoms/dropdown-selected';
import { searchOptions } from './helpers/search-options.helper';
import onBlurMenu from './helpers/blur-menu.helper';
import Input from '../inputs/input';
import Caret from '../icons/caret';
import DropdownMenu from './atoms/dropdown-menu';
import s from './dropdown.module.scss';

export const DropdownSearch = ({
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
  selected,
}) => {
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, toggleOpen] = useState(false);
  return (
    <div className={cn(s.wrap, className)}>
      <Input
        name={name}
        label={label}
        ref={triggerRef}
        placeholder={placeholder}
        onChange={onSearch}
        value={isMultiple ? undefined : selected[0]}
        onFocus={() => {
          toggleOpen(true);
        }}
        onBlur={(e) => { onBlurMenu({ e, menuRef, toggleOpen }); }}
        icon={<Caret className={isOpen ? s.caretDown : s.caretUp} />}
      />
      <DropdownMenu
        ref={menuRef}
        selected={selected}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={searchOptions(searchValue || '', options)}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        isOpen={isOpen}
      >
        {isMultiple && (
          <DropdownSelected unselect={onSelect} selected={selected} />
        )}
      </DropdownMenu>
    </div>
  );
};

DropdownSearch.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isMultiple: PropTypes.bool,
  scrollRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
};

DropdownSearch.defaultProps = {
  scrollRef: null,
  className: '',
  placeholder: '',
  label: '',
  isMultiple: false,
  searchValue: undefined,
  selected: [],
};

export default DropdownSearch;
