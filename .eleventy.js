require('dotenv').config();
const pluginSass = require("eleventy-plugin-sass");
const pluginSEO = require("eleventy-plugin-seo");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const siteConfig = require("./src/_data/site.js");

module.exports = function(eleventyConfig) {

  // Merge default an theme specific tags together
  eleventyConfig.setDataDeepMerge(true);

  // Enable Sass usage
  eleventyConfig.addPlugin(pluginSass, {
    watch: 'src/assets/css/*',
    outputDir: "dist/assets/css"
  });

  // Enable core SEO features
  eleventyConfig.addPlugin(pluginSEO, siteConfig);

  // Add a sitemap
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: siteConfig.url
    }
  });

  // Copy JavaScript and images into dist
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
