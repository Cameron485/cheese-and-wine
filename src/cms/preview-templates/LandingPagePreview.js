import React from 'react';
import PropTypes from 'prop-types';
import { LandingPageTemplate } from '../../templates/landing-page';

const LandingPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    return <LandingPageTemplate title={data.title} />;
};

LandingPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default LandingPagePreview;
