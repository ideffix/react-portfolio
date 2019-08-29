import React from 'react';

const BackgroundFixedSection = ({ imgSrc, children, height }) => {
    const backgroundFixedStyle = {
        background: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        position: 'relative',
        width: '100%',
        minHeight: `${height}px`,
    };
    return <div style={backgroundFixedStyle}>{children}</div>;
};

export default BackgroundFixedSection;
