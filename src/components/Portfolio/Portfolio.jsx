import React from 'react';
import PropTypes from 'prop-types';

const Portfolio = ({ children, withNavbar }) => <>{children}</>;

Portfolio.propTypes = {
    withNavbar: PropTypes.bool,
};

export default Portfolio;
