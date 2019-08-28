import React from 'react';
import useResolution from '../../../hooks/useResolution';

const WholePageSection = ({ imgSrc, children }) => {
    const { width, height } = useResolution();
    const backgroundStyle = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: `${width}px ${height}px`,
        width,
        height,
    };
    return <div style={backgroundStyle}>{children}</div>;
};

export default WholePageSection;
