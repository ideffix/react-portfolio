import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { DEFAULT_SCROLL_OPTIONS } from '../../config/scrollTo';
import { getComponentHeight } from '../../utils/componentUtils';
import useScrollPosition from '../../hooks/useScrollPosition';
import classNames from 'classnames';

const scrollTo = id =>
    Scroll.scroller.scrollTo(id, {
        ...DEFAULT_SCROLL_OPTIONS,
        offset: -getComponentHeight('navbar'),
    });

const getSecondElementOffsetTop = () => {
    const divs = Array.from(document.getElementById('root').children).filter(
        el => el.tagName === 'DIV',
    );
    if (divs.length >= 2) {
        return divs[1].offsetTop;
    } else {
        return -1;
    }
};

const Portfolio = ({ children, withNavbar, navbarOptions }) => {
    const mergedNavbarOptions = { ...DEFAULT_NAVBAR_OPTIONS, ...navbarOptions };
    const scrollPos = useScrollPosition();
    const [secondSectionOffsetTop, setSecondSectionOffsetTop] = useState(-1);
    if (mergedNavbarOptions.firstSectionOpacity) {
        if (secondSectionOffsetTop === -1) {
            const offsetTop = getSecondElementOffsetTop();
            if (offsetTop !== -1) {
                setSecondSectionOffsetTop(
                    offsetTop - getComponentHeight('navbar'),
                );
            }
        }
    }

    const renderWithNavbar = () => {
        const isTransparent =
            mergedNavbarOptions.firstSectionOpacity &&
            (secondSectionOffsetTop === -1 ||
                scrollPos < secondSectionOffsetTop);
        return (
            <>
                <Navbar
                    id={'navbar'}
                    className={classNames(
                        mergedNavbarOptions.wrapperClass,
                        (() => {
                            if (mergedNavbarOptions.firstSectionOpacity) {
                                return isTransparent
                                    ? mergedNavbarOptions.wrapperClassFirstSection
                                    : mergedNavbarOptions.wrapperClassRestSections;
                            } else {
                                return '';
                            }
                        })(),
                    )}
                    expand="lg"
                    fixed="top">
                    <Nav className={'mx-auto'}>
                        {React.Children.map(children, child => {
                            const { sectionName } = child.props;
                            if (sectionName) {
                                return (
                                    <Nav.Link
                                        onClick={() => scrollTo(sectionName)}
                                        className={classNames(
                                            mergedNavbarOptions.anchorClass,
                                            (() => {
                                                if (
                                                    mergedNavbarOptions.firstSectionOpacity
                                                ) {
                                                    return isTransparent
                                                        ? mergedNavbarOptions.anchorClassFirstSection
                                                        : mergedNavbarOptions.anchorClassRestSections;
                                                } else {
                                                    return '';
                                                }
                                            })(),
                                        )}>
                                        {sectionName}
                                    </Nav.Link>
                                );
                            }
                        })}
                    </Nav>
                </Navbar>
                {React.Children.map(children, child => {
                    const { sectionName } = child.props;
                    if (sectionName) {
                        return <div id={sectionName}>{child}</div>;
                    } else {
                        return child;
                    }
                })}
            </>
        );
    };

    return withNavbar ? renderWithNavbar() : children;
};

Portfolio.propTypes = {
    withNavbar: PropTypes.bool,
    navbarOptions: PropTypes.shape({
        firstSectionOpacity: PropTypes.bool,
        wrapperClass: PropTypes.string,
        wrapperClassFirstSection: PropTypes.string,
        wrapperClassRestSections: PropTypes.string,
        anchorClass: PropTypes.string,
        anchorClassFirstSection: PropTypes.string,
        anchorClassRestSections: PropTypes.string,
    }),
};

Portfolio.defaultProps = {
    withNavbar: false,
};

const DEFAULT_NAVBAR_OPTIONS = {
    firstSectionOpacity: false,
    wrapperClass: '',
    wrapperClassFirstSection: 'transparent',
    wrapperClassRestSections: 'bg-dark',
    anchorClass: 'text-light',
    anchorClassFirstSection: 'text-light',
    anchorClassRestSections: 'text-light',
};

export default Portfolio;
