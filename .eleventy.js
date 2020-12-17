module.exports = function(config) {

  // Make environment variables available
  let env = process.env.ELEVENTY_ENV;

  // Merge default an theme specific tags together
  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true
  };
};
