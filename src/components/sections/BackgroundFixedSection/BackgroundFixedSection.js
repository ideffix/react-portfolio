import React from 'react';
import PropTypes from 'prop-types';

const BackgroundFixedSection = ({ imgSrc, children, height }) => {
    const backgroundFixedStyle = {
        background: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        position: 'relative',
        width: '100%',
        height: `${height}px`,
    };
    return <div style={backgroundFixedStyle}>{children}</div>;
};

BackgroundFixedSection.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    height: PropTypes.number,
};

export default BackgroundFixedSection;
