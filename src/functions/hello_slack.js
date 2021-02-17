const querystring = require("querystring");
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
  const params = querystring.parse(event.body);
  const name = params.name || "World";

  // Send greeting to Slack
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text: `${name} says hello!` }),
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}! Your greeting has been sent to Slack 👋`,
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }));
};
