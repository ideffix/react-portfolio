import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';

const renderNavbar = children => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Nav className="mr-auto">
                {React.Children.map(children, child => {
                    if (child.props.sectionName) {
                        return (
                            <Nav.Link href={'#we'}>
                                {child.props.sectionName}
                            </Nav.Link>
                        );
                    }
                })}
            </Nav>
        </Navbar>
    );
};

const Portfolio = ({ children, withNavbar }) => (
    <>
        {withNavbar && renderNavbar(children)}
        {children}
    </>
);

Portfolio.propTypes = {
    withNavbar: PropTypes.bool,
};

Portfolio.defaultProps = {
    withNavbar: false,
};

export default Portfolio;
