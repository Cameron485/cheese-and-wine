import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import breakPoints from '../../helpers/breakPoints';
import { Layout } from '../../components';

const StyledThanksContainer = styled.div`
    height: 80vh;
    font-size: 2rem;

    @media (max-width: ${breakPoints.tablet}px) {
        height: 60vh;
        font-size: 1rem;
    }
`;

const PeoplePage = () => (
    <Layout>
        <StyledThanksContainer className="section">
            <div className="container">
                <div className="content has-text-centered">
                    <h1 className="has-text-weight-bold is-size-1">
                        Cheers Pal!
                    </h1>
                    <p>
                        Got some more? Click <Link to="/">here</Link> to go back
                    </p>
                </div>
            </div>
        </StyledThanksContainer>
    </Layout>
);

export default PeoplePage;
