const express = require('express');

const dbRoute = require('./database.route');
const emailRoute = require('./email.route');
const clientRoute = require('./client.route');
const storageRoute = require('./storage.route');
const credentialRoute = require('./credential.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/storage',
    route: storageRoute,
  },
  {
    path: '/database',
    route: dbRoute,
  },
  {
    path: '/client',
    route: clientRoute,
  },
  {
    path: '/credential',
    route: credentialRoute,
  },
  {
    path: '/email',
    route: emailRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// /* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
