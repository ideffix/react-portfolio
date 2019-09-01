import React from 'react';
import Portfolio from './components/Portfolio';
import WholePageSection from './components/sections/WholePageSection';
import dna from './images/dna.jpg';
import mustang from './images/mustang.jpg';
import coding from './images/coding.jpg';
import TitleContentScheme from './schemes/TitleContentScheme';
import BackgroundFixedSection from './components/sections/BackgroundFixedSection';
import CarouselScheme from './schemes/CarouselScheme';
import java from './images/java.png';
import spring from './images/spring.png';
import wtf from './images/wtf.png';
import html from './images/html.png';
import js from './images/javascript.png';
import css from './images/css.png';
import react from './images/react.png';
import redux from './images/redux.png';

const technologiesSlides = [
    [java, spring, wtf],
    [html, css, js],
    [react, redux],
];

const App = () => {
    return (
        <Portfolio
            withNavbar={true}
            navbarOptions={{
                firstSectionOpacity: true,
                anchorClass: 'h5 pl-3 pr-3 orange',
            }}>
            <WholePageSection imgSrc={dna} sectionName={'About me'}>
                <TitleContentScheme
                    title={"I'm Bartosz Kopciuch"}
                    content={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto consequuntur deserunt dignissimos fuga, fugiat illo molestias officia possimus quo sequi vel velit veritatis! Dicta doloribus ea labore quos repellendus.'
                    }
                />
            </WholePageSection>
            <BackgroundFixedSection
                imgSrc={coding}
                height={300}
                sectionName={'My technologies'}>
                <CarouselScheme title={'My technologies'}>
                    {technologiesSlides.map(slide => (
                        <div className={'row'}>
                            {slide.map(tech => (
                                <div className={'col'}>
                                    <img src={tech} height={200} />
                                </div>
                            ))}
                        </div>
                    ))}
                </CarouselScheme>
            </BackgroundFixedSection>
            <WholePageSection imgSrc={mustang} sectionName={'My dream car'}>
                <TitleContentScheme
                    className={'black'}
                    title={'Mustang <3'}
                    content={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto consequuntur deserunt dignissimos fuga, fugiat illo molestias officia possimus quo sequi vel velit veritatis! Dicta doloribus ea labore quos repellendus.'
                    }
                />
            </WholePageSection>
            <div sectionName={'New section'}></div>
        </Portfolio>
    );
};

export default App;
