import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { DEFAULT_SCROLL_OPTIONS } from '../../config/scrollTo';
import { getComponentHeight } from '../../utils/componentUtils';

const scrollTo = id =>
    Scroll.scroller.scrollTo(id, {
        ...DEFAULT_SCROLL_OPTIONS,
        offset: -getComponentHeight('navbar'),
    });

const renderWithNavbar = children => {
    return (
        <>
            <Navbar id={'navbar'} bg="light" expand="lg" fixed="top">
                <Nav className="mr-auto">
                    {React.Children.map(children, child => {
                        const { sectionName } = child.props;
                        if (sectionName) {
                            return (
                                <Nav.Link onClick={() => scrollTo(sectionName)}>
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
                }
            })}
        </>
    );
};

const Portfolio = ({ children, withNavbar }) =>
    withNavbar ? renderWithNavbar(children) : children;

Portfolio.propTypes = {
    withNavbar: PropTypes.bool,
};

Portfolio.defaultProps = {
    withNavbar: false,
};

export default Portfolio;
