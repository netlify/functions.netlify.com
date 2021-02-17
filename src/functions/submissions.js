const { GITHUB_TOKEN } = process.env;

const { Octokit } = require("@octokit/core");
const { createPullRequest } = require("octokit-plugin-create-pull-request");
const queryString = require("querystring");
const slugify = require("slugify");

const MyOctokit = Octokit.plugin(createPullRequest);

const octokit = new MyOctokit({
  auth: GITHUB_TOKEN,
});

const mdTemplate = (params, tagsArray) => `
---
title: "${params.name}"
code: "${params.code.replace("https://github.com/", "")}"
url: "${params.url}"
tags: 
${
  tagsArray.length
    ? tagsArray
        .map(
          (tag, index) =>
            `  - ${tag.value} ${index + 1 < tagsArray.length ? `\n` : ""}`
        )
        .join("")
    : ""
}
---
${params.description}
`;

const prBodyTemplate = (params, tagsArray) => `
### Summary

${params.description}

Contact email: ${params.email || "Not supplied"}

### Checklist

Please provide the following with your example:

- title: ${params.name}
- URL to the source code: ${params.code}
- An additional URL for context or to a working demo: ${
  params.url || "not supplied"
}
- Suggested tags, e.g. "airtable", "gatsby", "email":
  ${tagsArray.map((tag) => tag.value).join(", ")}
`;

exports.handler = (event, context, callback) => {
  const params = queryString.parse(event.body);
  const fileName = slugify(params.name, { lower: true });
  const tagsArray = JSON.parse(params.tags);

  octokit
    .createPullRequest({
      owner: "netlify",
      repo: "functions",
      title: `Function example: ${params.name}`,
      body: prBodyTemplate(params, tagsArray),
      head: `add-example-${fileName}`,
      changes: [
        {
          files: {
            [`src/examples/${fileName}.md`]: {
              content: mdTemplate(params, tagsArray),
            },
          },
          commit: `add ${params.name} function example to examples`,
        },
      ],
    })
    .then((pr) => console.log("New pull request: " + pr.data.number));
};
