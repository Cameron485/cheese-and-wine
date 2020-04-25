import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components';

export const ProjectPageTemplate = ({ title, about }) => (
    <div className="container">
        <h1>{title}</h1>
        <p>{about}</p>
    </div>
);

ProjectPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

const ProjectPage = ({ data: { markdownRemark: project } }) => (
    <Layout>
        <ProjectPageTemplate
            title={project.frontmatter.title}
            about={project.frontmatter.about}
        />
    </Layout>
);

ProjectPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    about: PropTypes.string.isRequired,
                })
            ).isRequired,
        }).isRequired,
    }),
};

export default ProjectPage;

export const pageQuery = graphql`
    query ProjectById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                about
            }
        }
    }
`;
