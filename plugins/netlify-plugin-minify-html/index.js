const comp = require("@node-minify/core");
const htmlMinifier = require("@node-minify/html-minifier");

module.exports = {
  onPostBuild: async ({ inputs, constants, utils }) => {
    // Only continue in the selected deploy contexts
    if (!inputs.contexts.includes(process.env.CONTEXT)) {
      console.log("Not minifiying HTML in the context:", process.env.CONTEXT);
      return;
    }

    // Minify HTML
    console.log("Minifiying HTML in the deploy context:", process.env.CONTEXT);
    console.log(
      "Minifiying HTML with these options:",
      inputs.minifierOptions || "Default"
    );

    try {
      await comp({
        compressor: htmlMinifier,
        input: constants.PUBLISH_DIR + "/**/*.html",
        output: "$1.html",
        replaceInPlace: true,
        options: false
      });
    } catch (error) {
      utils.build.failPlugin("The Minify HTML plugin failed.", { error });
    }
  }
};
