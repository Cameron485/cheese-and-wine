import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { withPrefix } from 'gatsby';

import useSiteMetadata from './UseSiteMetadata';
import Header from './Header';
import Footer from './Footer';

import './all.sass';

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Open Sans'
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Open Sans'
    }
    a {
        text-decoration: none;
    }
`;

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div>
            <GlobalStyle />
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta
                    property="og:image"
                    content={`${withPrefix('/')}img/follow-og-image.png`}
                />
            </Helmet>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default TemplateWrapper;
