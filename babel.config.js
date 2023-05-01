module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-react", ["@babel/preset-env"]];

  const plugins = [
    "@babel/plugin-proposal-optional-chaining", // Management deeply nested properties
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-syntax-dynamic-import"
  ];

  return {
    presets,
    plugins
  };
};
