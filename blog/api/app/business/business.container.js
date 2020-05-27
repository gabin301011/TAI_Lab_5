'use strict';
import postManager from './post.manager'
import userManager from './user.manager'

function getContext(request) {
  return { user: request && request.user };
}

function getter(manager, request) {
  return function () {
    return manager.create(getContext(request), this);
  };
}

const createBusinessContainer = (request, config) => {

  return {
    getUserManager: getter(userManager),
    getPostManager: getter(postManager, request)
  };
};

export default createBusinessContainer;