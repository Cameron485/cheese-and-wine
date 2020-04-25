import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import useSiteMetadata from './UseSiteMetadata';
import breakPoints from '../helpers/breakPoints';

const StyledHeader = styled.header`
    height: 10vh;
    background-color: papayawhip;
    font-size: 2rem;

    @media (max-width: ${breakPoints.tablet}px) {
        height: 20vh;
        font-size: 3rem;
    }
`;

const Description = styled.p`
    padding-right: 0.75rem;
    font-size: 1.2rem;
    align-self: center;

    @media (max-width: ${breakPoints.tablet}px) {
        font-size: 1.5rem;
    }
`;

const StyledNavbar = styled.div`
    height: 100%;
`;

const Header = () => {
    const { description } = useSiteMetadata();
    return (
        <StyledHeader
            className="navbar is-transparent"
            role="navigation"
            aria-label="main-navigation"
        >
            <StyledNavbar className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <span aria-label="cheese" role="img">
                        🧀
                    </span>
                    +
                    <span aria-label="wine" role="img">
                        🍷
                    </span>
                </Link>
                <Description>{description}</Description>
            </StyledNavbar>
        </StyledHeader>
    );
};
export default Header;
