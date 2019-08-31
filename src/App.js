import React from 'react';
import Portfolio from './components/Portfolio';
import WholePageSection from './components/sections/WholePageSection';
import dna from './images/dna.jpg';
import mustang from './images/mustang.jpg';
import coding from './images/coding.jpg';
import TitleContentScheme from './schemes/TitleContentScheme';
import BackgroundFixedSection from './components/sections/BackgroundFixedSection';

const App = () => {
    return (
        <Portfolio
            withNavbar={true}
            navbarOptions={{
                firstSectionOpacity: true,
                anchorClass: 'h5 pl-3 pr-3',
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
                height={200}
                sectionName={'Something here'}>
                Something hereY
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
