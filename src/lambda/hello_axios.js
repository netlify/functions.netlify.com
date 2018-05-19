import axios from "axios";

const API_ENDPOINT =
  "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";

exports.handler = async (event, context) => {
  return axios
    .get(API_ENDPOINT)
    .then(({ data }) => ({
      statusCode: 200,
      body: `${data.setup} ${data.punchline} *BA DUM TSSS*`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
