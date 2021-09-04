const componentsDir = require('path').dirname(require.resolve('web-components/package.json'));

/** @type import('@types/tailwindcss/tailwind-config').TailwindConfig */
module.exports = {
  mode: 'jit',
  purge: [`${componentsDir}/**/*.{js,ts,jsx,tsx}`, 'pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
};
