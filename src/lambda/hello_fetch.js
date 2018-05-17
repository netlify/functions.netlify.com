import fetch from "node-fetch";

const API_ENDPOINT =
  "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${data.setup} ${data.punchline} *BA DUM TSSS*`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
