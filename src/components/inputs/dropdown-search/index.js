import React from 'react';
import PropTypes from 'prop-types';

import DropdownSearchTrigger from './dropdown-search-trigger';
import DropdownSearchMenu from './dropdown-search-menu';
import s from './dropdown-search.module.scss';

const DropdownSearch = ({ options, onSearch }) => (
  <div className={s.wrap}>
    <DropdownSearchTrigger />
    {options.length && (
      <DropdownSearchMenu
        onSearch={onSearch}
        options={options}
      />
    )}
  </div>
);

DropdownSearch.propTypes = {
  options: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

DropdownSearch.defaultProps = {};
export default DropdownSearch;
