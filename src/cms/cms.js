import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import LandingPagePreview from './preview-templates/LandingPagePreview';
import PeoplePagePreview from './preview-templates/PeoplePagePreview';
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview';
import withStyledComponentsRendered from './styled-components';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate(
    'landing-page',
    withStyledComponentsRendered(LandingPagePreview)
);
CMS.registerPreviewTemplate(
    'people',
    withStyledComponentsRendered(PeoplePagePreview)
);
CMS.registerPreviewTemplate(
    'projects-page',
    withStyledComponentsRendered(ProjectsPagePreview)
);
