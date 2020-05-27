'use strict';

import userEndpoint from './user.endpoint';
import postEndpoint from './post.endpoint';

const routes = (router, config) => {
    userEndpoint(router);
    postEndpoint(router);
};

export default routes;