// grid docs: https://storybook.js.org/addons/storybook-addon-grid
// figma docs: https://storybook.js.org/addons/storybook-addon-designs/

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
      "@storybook/preset-create-react-app",
      "@storybook/addon-actions",
      "@storybook/addon-links",
      "@storybook/addon-docs",
      "@storybook/addon-controls",
      "@storybook/addon-storysource",
      "storybook-addon-designs",
      "storybook-addon-grid/preset",
    ],
    webpackFinal: async (config) => {
      config.resolve.modules.push("../src");
      config.module.rules.push(
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
        {
          test: /\.css$/,
          loader: [
            require.resolve("style-loader"),
            require.resolve("css-loader"),
          ],
        },
        {
          test: /\.stories\.tsx$/,
          loaders: [
            {
              loader: require.resolve("@storybook/source-loader"),
              options: { parser: "typescript" },
            },
          ],
          enforce: "pre",
        },
        {
          test: /\.svg$/,
          loaders: [
            {
              loader: require.resolve("url-loader"),
              options: {
                limit: 8 * 1024,
              },
            },
          ],
          enforce: "pre",
        },
      );
      config.resolve.extensions.push(".ts", ".tsx");
      return config;
    },
  };
  