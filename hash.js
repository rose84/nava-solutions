#!/usr/bin/env node
// Node module for search and replace
// https://github.com/adamreisnz/replace-in-file#readme
const replace = require('replace-in-file');

// Generate ramdom 16 digit number
const generate = () => {
  const max = 10 ** 3;
  const now = max * +new Date();
  const result = (now + 0).toString();
  return result;
};
const hash = generate();

// Pass Replace option
const options = {
  files: [
    'netlify.toml',
    'layouts/partials/critical.html',
    'layouts/partials/analytics.html',
  ],
  from: /(generateHash|\d{16})/g,
  to: hash,
};

// Run replace function
replace(options, (error, changes) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  console.log('Modified files:', changes.join(', '));
});
