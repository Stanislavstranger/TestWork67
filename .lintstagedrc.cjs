module.exports = {
  '*.{ts,tsx,js,jsx}': [
    'eslint --fix --cache --cache-location node_modules/.cache/eslint',
    'prettier --write',
  ],

  '*.scss': [
    'stylelint --fix --cache --cache-location node_modules/.cache/stylelint',
    'prettier --write',
  ],

  '*.{json,md,css,html}': ['prettier --write'],

  '*.{ts,tsx}': () => 'tsc --noEmit -p tsconfig.json',
};
