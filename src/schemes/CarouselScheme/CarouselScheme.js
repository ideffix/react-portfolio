import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
};

const CarouselScheme = ({ children, title }) => (
    <div className={'text-center'}>
        <h3>{title}</h3>
        <div className={'pl-5 pr-5 h-100'}>
            <Slider {...settings}>{children}</Slider>
        </div>
    </div>
);

export default CarouselScheme;
