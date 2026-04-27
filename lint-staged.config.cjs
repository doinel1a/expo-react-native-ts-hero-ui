const path = require('node:path');

const tsc = () => 'tsc --noEmit';

const eslint = (filenames) =>
  `expo lint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const prettier = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} --cache`;

module.exports = {
  '*.{ts,tsx}': [tsc],
  '*.{js,jsx,ts,tsx}': [eslint],
  '*.{html,css,scss,js,jsx,cjs,mjs,ts,tsx,mdx}': [prettier]
};
