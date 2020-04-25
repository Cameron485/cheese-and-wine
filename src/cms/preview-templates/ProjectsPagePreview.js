import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPageTemplate } from '../../templates/project-page';

const PeoplePagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    console.log(data);

    return <ProjectPageTemplate title={data.title} />;
};

PeoplePagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default PeoplePagePreview;
