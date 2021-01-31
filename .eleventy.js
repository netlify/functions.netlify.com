require("dotenv").config();
const pluginSass = require("eleventy-plugin-sass");
const pluginSEO = require("eleventy-plugin-seo");
const pluginSchema = require("@quasibit/eleventy-plugin-schema");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const siteConfig = require("./src/_data/site.js");

module.exports = function (eleventyConfig) {
  // Merge default an theme specific tags together
  eleventyConfig.setDataDeepMerge(true);

  // Enable Sass usage
  eleventyConfig.addPlugin(pluginSass, {
    watch: "src/assets/css/*",
    outputDir: "dist/assets/css",
  });

  // Enable core SEO features
  eleventyConfig.addPlugin(pluginSEO, {
    ...siteConfig,
    options: { twitterCardType: "summary" },
  });

  // Add schema data
  eleventyConfig.addPlugin(pluginSchema);

  // Add a sitemap
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: siteConfig.url,
    },
  });

  // Add syntax highlighting
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Display array keys and exlude items from an array
  eleventyConfig.addFilter("keys", (obj) => Object.keys(obj));
  eleventyConfig.addFilter("except", (arr = [], ...values) => {
    const data = new Set(arr);
    for (const item of values) {
      data.delete(item);
    }
    return [...data].sort();
  });

  // Copy JavaScript, images, functions and Netlify CMS config into dist
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/functions");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@yaireo/tagify/dist/tagify.min.js": "assets/js/tagify.min.js",
    "node_modules/@yaireo/tagify/dist/tagify.css": "assets/css/tagify.css",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
