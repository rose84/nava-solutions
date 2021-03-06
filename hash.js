#!/usr/bin/env node
// Node module for search and replace
// https://github.com/adamreisnz/replace-in-file#readme
const replace = require('replace-in-file');

// Generate ramdom 16 digit number
/*
Array(16) creates an Array Object with a length of 16.
The "..." is the spread operator and allow the creation of an Array with 16 undefined elements.
A random number is generated between 0 and 36.
The toString() method returns a string representation of the object in the specified radix; in this case 36.
This is mapped over the array and join, creating 16 character alphanumeric string.
*/
const hash = [...Array(24)].map(() => ((Math.random() * 36) | 0).toString(36)) // eslint-disable-line no-bitwise
  .join``;

// Pass Replace option
const options = {
  files: [
    'netlify.toml',
    'layouts/partials/critical.html',
    'layouts/partials/analytics.html',
    'assets/js/wufoo.js',
  ],
  from: /(generateHash|[a-z0-9]{24})/g,
  to: hash,
};

// Run replace function
replace(options, (error, changes) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  console.log('Modified files:', changes.join(', '));
});
