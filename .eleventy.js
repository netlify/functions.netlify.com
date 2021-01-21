require("dotenv").config();
const pluginSass = require("eleventy-plugin-sass");
const pluginSEO = require("eleventy-plugin-seo");
const pluginSchema = require("@quasibit/eleventy-plugin-schema");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const siteConfig = require("./src/_data/site.js");

module.exports = function(eleventyConfig) {
  // Merge default an theme specific tags together
  eleventyConfig.setDataDeepMerge(true);

  // Enable Sass usage
  eleventyConfig.addPlugin(pluginSass, {
    watch: "src/assets/css/*",
    outputDir: "dist/assets/css"
  });

  // Enable core SEO features
  eleventyConfig.addPlugin(pluginSEO, siteConfig);

  // Add schema data
  eleventyConfig.addPlugin(pluginSchema);

  // Add a sitemap
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: siteConfig.url
    }
  });

  // Copy JavaScript, images and Netlify CMS config into dist
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@yaireo/tagify/dist/tagify.min.js": "assets/js/tagify.min.js",
    "node_modules/@yaireo/tagify/dist/tagify.css": "assets/css/tagify.css"
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true
  };
};
