import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Color.css';

const Color = (props) => {
  const { name, hex } = props;
  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {name}.</p>
      <p>Isnt it beautiful?</p>
      <p><Link to="/">Go back</Link></p>
    </div>
  );
};

Color.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Color;
