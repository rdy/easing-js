require('babel-core/register');
require('babel-polyfill');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('require-dir')('./tasks');