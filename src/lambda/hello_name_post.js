exports.handler = async (event, context) => {
  /* Only allow POST */
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  /* When the method is POST, the name will no longer be in the event’s
  queryStringParameters – it’ll be in the event body encoded as a query string */
  const params = parseQueryString(event.body);
  const name = params.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
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
