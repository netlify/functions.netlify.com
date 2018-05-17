import fetch from "node-fetch";

exports.handler = async (event, context) => {
  /* Only allow POST */
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  /* When the method is POST, the name will no longer be in the event’s
  queryStringParameters – it’ll be in the event body encoded as a queryString */
  const params = parseQueryString(event.body);
  const name = params.name || "World";

  /* Send greeting to Slack */
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text: `${name} says hello!` })
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}!`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${String(error)}`
    }));
};

/* Utility function to parse a string with the shape key1=value1&key2=value2
into an object like {key1: value1, k: value2} */
function parseQueryString(queryString) {
  return queryString
    .split("&")
    .map(param => {
      const [key, value] = param.split("=");
      return { key, value };
    })
    .reduce((params, { key, value }) => {
      params[key] = value;
      return params;
    }, {});
}
