module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  // ignore: ['./src/stories/**/*', '**/__tests__', './src/testUtils', './src/**/*.d.ts'],
  ignore: ['**/__tests__', './src/testUtils', './src/**/*.d.ts'],
};
