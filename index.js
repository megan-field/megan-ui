
/* eslint-disable */

// Use babel-register to precompile ES6 syntax
require('babel-register');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

// Setup global variables for server
global.__DISABLE_SSR__ = false; // Disable server side render here
global.__DEV__ = process.env.NODE_ENV !== 'production';
global.__API__ = JSON.stringify(process.env.API_ENDPOINT.toString());

// This should be the same with webpack context
const dirRoot = require('path').join(process.cwd());

// Settings of webpack-isomorphic-tools
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./tools/webpack/WIT.config')).server(dirRoot, () => {
  require('./src/foundation/server');
});
