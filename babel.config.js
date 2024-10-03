module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './' // This should match the alias in your tsconfig.json
          }
        }
      ]
    ]
  };
};
