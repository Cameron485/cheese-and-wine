import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components';

export const PeoplePageTemplate = ({
    name,
    about,
    profession,
    qualifications,
    role,
}) => (
    <div className="container">
        <h1>{name}</h1>
        <p>{about}</p>
        <p>{profession}</p>
        <p>{qualifications}</p>
        <p>{role}</p>
    </div>
);

PeoplePageTemplate.propTypes = {
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    qualifications: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

const PeoplePage = ({ data: { markdownRemark: person } }) => {
    console.log(person.frontmatter.qualifications);
    return (
        <Layout>
            <PeoplePageTemplate
                name={person.frontmatter.name}
                about={person.frontmatter.about}
                profession={person.frontmatter.profession}
                qualifications={person.frontmatter.qualifications}
                role={person.frontmatter.role}
            />
        </Layout>
    );
};

PeoplePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                name: PropTypes.string.isRequired,
                about: PropTypes.string.isRequired,
                profession: PropTypes.string.isRequired,
                qualifications: PropTypes.string.isRequired,
                role: PropTypes.string.isRequired,
            }),
        }).isRequired,
    }),
};

export default PeoplePage;

export const pageQuery = graphql`
    query PersonById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                name
                about
                profession
                qualifications
                role
            }
        }
    }
`;
