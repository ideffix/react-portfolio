import React from 'react';
import PropTypes from 'prop-types';

const TitleContentScheme = ({ title, content, className }) => (
    <div className={'container h-100 ' + className}>
        <div className={'row h-100'}>
            <div className={'my-auto text-center w-100'}>
                <h1 className={'pb-5 display-1 font-weight-bolder'}>{title}</h1>
                <h2>{content}</h2>
            </div>
        </div>
    </div>
);

TitleContentScheme.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default TitleContentScheme;
