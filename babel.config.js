module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/typescript",
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
};
