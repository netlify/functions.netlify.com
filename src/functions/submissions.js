const { processEntry } = require("@staticman/netlify-functions");
const queryString = require("querystring");
var pkg = require("./package.json");

exports.handler = (event, context, callback) => {
  const repo = pkg.repository;
  const [username, repository] = repo.split("/");
  const bodyData = queryString.parse(event.body);

  event.queryStringParameters = {
    ...event.queryStringParameters,
    ...bodyData,
    username,
    repository,
  };

  const config = {
    origin: event.headers.origin,
    sites: {
      [repo]: {
        allowedFields: ["name", "url", "code", "tags", "description"],
        branch: "submissions",
        commitMessage: "Added submission: {fields.name}",
        filename: "{fields.name}",
        format: "frontmatter",
        moderation: false,
        path: "src/examples",
        requiredFields: ["name", "url"],
        transforms: {
          description: "frontmatterContent",
        },
      },
    },
  };

  return processEntry(event, context, callback, config);
};