const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add custom rules for Leaflet CSS
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'css-loader',
      'style-loader'
    ],
  });

  return config;
}; 