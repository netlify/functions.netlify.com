const fetch = require("node-fetch");

const githubAPI = async function(repoURL) {
  // if (typeof repoURL !== "string" || repoURL.includes("blob")) {
  //   return null;
  // }
  //
  // const APIPath =
  //   "https://api.github.com/repos" + repoURL.split("github.com")[1];
  //
  // console.log("Fetching new github data...");
  // return fetch(APIPath)
  //   .then(res => res.json())
  //   .then(json => {
  //     return {
  //       stargazers: json.stargazers_count,
  //       forks: json.forks_count
  //     };
  //   });

  // TODO: Implement GitHub API with credentials
  return {
    stargazers: 123,
    forks: 456
  };
};

module.exports = {
  tags: ["examples"],
  layout: "layouts/page.njk",
  permalink: "/example/{{ page.fileSlug }}/",
  eleventyComputed: {
    githubData: data => githubAPI(data.code)
  }
};
