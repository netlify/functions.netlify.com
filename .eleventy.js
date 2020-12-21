const pluginSass = require("eleventy-plugin-sass");
const pluginSEO = require("eleventy-plugin-seo");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const siteConfig = require("./src/_data/site.json");

module.exports = function(eleventyConfig) {

  // Make environment variables available
  let env = process.env.ELEVENTY_ENV;

  // Merge default an theme specific tags together
  eleventyConfig.setDataDeepMerge(true);

  // Enable Sass usage
  eleventyConfig.addPlugin(pluginSass, {
    watch: 'src/assets/css/*',
    outputDir: "dist/assets/css"
  });

  // Enable core SEO features
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/site.json"));

  // Add a sitemap
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: siteConfig.url,
    },
  });

  // Copy JavaScript and images into dist
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true
  };
};
