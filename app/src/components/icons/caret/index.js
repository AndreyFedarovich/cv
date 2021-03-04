import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './caret.module.scss';

const Caret = ({ className }) => (
  <span className={cn(s.root, className)} />
);

Caret.propTypes = {
  className: PropTypes.string,
};

Caret.defaultProps = {
  className: '',
};

export default Caret;
