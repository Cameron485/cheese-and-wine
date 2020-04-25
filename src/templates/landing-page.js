import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import breakPoints from '../helpers/breakPoints';
import { Layout, Contact } from '../components';

const StyledLandingPageContainer = styled.div`
    font-size: 2rem;

    @media (max-width: ${breakPoints.tablet}px) {
        font-size: 1rem;
    }
`;

export const LandingPageTemplate = ({ title, description }) => (
    <StyledLandingPageContainer className="container">
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1 className="has-text-weight-bold is-size-1">
                        Enter Prompts
                    </h1>
                    <p>
                        Please enter as many or as little prompts for each game
                        as you want. Multiple values can be entered in each
                        prompt. Just separate them with a comma
                    </p>
                    <Contact />
                </div>
            </div>
        </section>
    </StyledLandingPageContainer>
);

LandingPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const LandingPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <LandingPageTemplate
                title={frontmatter.title}
                description={frontmatter.description}
            />
        </Layout>
    );
};

LandingPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }),
        }),
    }),
};

export default LandingPage;

export const pageQuery = graphql`
    query LandingPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
            frontmatter {
                title
                description
            }
        }
    }
`;
