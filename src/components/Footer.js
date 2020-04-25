import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

import breakPoints from '../helpers/breakPoints';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100%;
    align-items: center;

    height: 10vh;
    background-color: papayawhip;
    font-size: 2rem;

    @media (max-width: ${breakPoints.tablet}px) {
        height: 20vh;
        font-size: 1.5rem;
    }
`;

const Footer = () => (
    <StyledFooter className="has-text-centered">
        <a
            target="__blank"
            className="is-size-2"
            href="https://github.com/Cameron485/cheese-and-wine"
        >
            <FaGithub />
        </a>
    </StyledFooter>
);

export default Footer;
