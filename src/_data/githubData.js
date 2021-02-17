const { ELEVENTY_ENV, GITHUB_TOKEN } = process.env;

const CacheAsset = require("@11ty/eleventy-cache-assets");
const fastglob = require("fast-glob");
const graymatter = require("gray-matter");

async function githubRequest(user, repo) {
  let errorData = {
    stars: "",
    forks: "",
  };

  if (ELEVENTY_ENV == "dev") {
    return errorData;
  }

  const query = `
    query {
      repository(owner: "${user}", name: "${repo}") {
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        description
        readme: object(expression: "HEAD:README.md") {
          ... on Blob {
            text
          }
        }
      }
    }
  `;

  const url = `https://api.github.com/graphql?user=${user}&repo=${repo}`;
  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  };
  const opts = {
    duration: "1401m", // 23.5 hours
    type: "json",
    fetchOptions,
  };

  let req;
  try {
    req = await CacheAsset(url, opts);
    if (req.errors && req.errors.length) {
      console.log("GitHub Data Source Error from API", req.errors);
      // if (req.errors.filter(e => e.type === "RATE_LIMITED").length > 0) {
      //   throw new Error("Failing the build due to GitHub API rate limiting.");
      // }
      return errorData;
    }

    return {
      stars: req.data.repository.stargazers.totalCount,
      forks: req.data.repository.forks.totalCount,
      readme: req.data.repository.readme.text,
      description:
        req.data.repository.description === null
          ? ""
          : req.data.repository.description,
    };
  } catch (e) {
    console.log("GitHub Data Source Error", e);

    return errorData;
  }
}

async function getReposFromMarkdown(glob) {
  let examples = await fastglob(glob, {
    caseSensitiveMatch: false,
  });

  let repos = [];
  for (let example of examples) {
    let matter = graymatter.read(example);
    let fullRepo = matter.data.code;
    if (fullRepo && typeof fullRepo === "string") {
      let split = fullRepo.split("/");
      let user = split[0];
      let repo = split[1];

      if (!matter.data.repohost || matter.data.repohost === "github") {
        if (matter.data.disabled) {
          continue;
        }
        repos.push({ user, repo });
      }
    }
  }

  return repos;
}

module.exports = async function () {
  let data = {};

  let exampleRepos = await getReposFromMarkdown("./src/examples/*.md");
  for (let entry of exampleRepos) {
    data[`${entry.user}/${entry.repo}`] = await githubRequest(
      entry.user,
      entry.repo
    );
  }

  return data;
};
