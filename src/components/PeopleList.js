import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';

const PeopleList = ({
    data: {
        allMarkdownRemark: { edges: people },
    },
}) => (
    <div>
        <h1>People</h1>
        {people.map(({ node: person }) => (
            <Link to={person.fields.slug} key={person.id}>
                {person.frontmatter.name}
            </Link>
        ))}
    </div>
);

PeopleList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

const Query = () => (
    <StaticQuery
        query={graphql`
            query PeopleListQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "people-page" } }
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
                                name
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <PeopleList data={data} count={count} />}
    />
);

export default Query;
