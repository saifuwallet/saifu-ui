module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            '@/components': './src/components',
            '@/lib': './src/lib',
            '@/types': './src/types',
            '@/constants': './src/constants',
            '@/hooks': './src/hooks',
            '@/contexts': './src/contexts',
          },
        },
      ],
    ],
  };
};
