import PropTypes from 'prop-types';

export const allMarkdownRemarkPropTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }).isRequired,
                    }).isRequired,
                }).isRequired
            ).isRequired,
            totalCount: PropTypes.number.isRequired,
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                })
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
};
