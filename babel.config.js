/* eslint-disable unicorn/prefer-module */
/* eslint-disable unicorn/no-anonymous-default-export */

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo']
  };
};
