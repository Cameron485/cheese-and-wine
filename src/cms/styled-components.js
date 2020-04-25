import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

function StyleInjector({ children }) {
    const [iframeRef, setIframeRef] = useState(null);

    useEffect(() => {
        const iframe = document.getElementsByTagName('iframe')[0];
        const iframeHeadElem = iframe.contentDocument.head;
        setIframeRef(iframeHeadElem);
    }, []);

    return (
        iframeRef && (
            <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
        )
    );
}

StyleInjector.propTypes = {
    children: PropTypes.shape({}),
};

const withStyledComponentsRendered = (Comp) => (props) => (
    <StyleInjector>
        <Comp {...props} />
    </StyleInjector>
);

export default withStyledComponentsRendered;
