import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';

const ProjectList = ({
    data: {
        allMarkdownRemark: { edges: projects },
    },
}) => (
    <div>
        <h1>Projects</h1>
        {projects.map(({ node: project }) => (
            <Link to={project.fields.slug} key={project.id}>
                {project.frontmatter.title}
            </Link>
        ))}
    </div>
);

ProjectList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

const Query = () => (
    <StaticQuery
        query={graphql`
            query ProjectListQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "project-page" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <ProjectList data={data} count={count} />}
    />
);

export default Query;
