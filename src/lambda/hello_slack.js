/* Putting it all together: send the greeting to a Slack channel.

For this example you will need a Slack account to create an incoming webhook.

1. Sign in to your Slack account. If you don’t have a Slack account, you can
create one for free at https://slack.com

2. Create an incoming webhook at https://my.slack.com/services/new/incoming-webhook/

3. To test the function locally, add the webhook URL from step 2 to the .env
file in the root folder of your repository:

SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX

4. To test the function in your deployed site, sign in to your Netlify account at
https://app.netlify.com and add the environment variable to your site’s
Settings > Build & Deploy > Build environment variables
*/

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
  console.log({ env: process.env });

  const { SLACK_WEBHOOK_URL } = process.env;

  const response = await fetch(SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text: `Hello, ${name}` })
  });

  return {
    statusCode: response.status,
    body: response.statusText
  };
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
