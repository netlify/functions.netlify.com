const pluginSass = require("eleventy-plugin-sass");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(config) {

  // Make environment variables available
  let env = process.env.ELEVENTY_ENV;

  // Merge default an theme specific tags together
  config.setDataDeepMerge(true);

  // Enable Sass usage
  config.addPlugin(pluginSass, {
    watch: 'src/assets/css/*',
    outputDir: "dist/assets/css"
  });

  // Enable core SEO features
  config.addPlugin(pluginSEO, require("./src/_data/config.json"));


  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true
  };
};
