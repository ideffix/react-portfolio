import React from 'react';

const TitleContentScheme = ({ title, content, className }) => (
    <div className={'container h-100 ' + className}>
        <div className={'row h-100'}>
            <div className={'my-auto text-center w-100'}>
                <h1 className={'pb-5'}>{title}</h1>
                <h3>{content}</h3>
            </div>
        </div>
    </div>
);

export default TitleContentScheme;
