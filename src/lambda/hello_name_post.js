/* Inspecting the event object, we discover some more handy properties
that let us make sure we only process POST requests. */
exports.handler = async (event, context) => {
  /* Only allow POST */
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  /* Sanity check for the content type, because we'll only support
  url encoded content for now */
  if (event["content-type"] !== "application/x-www-form-urlencoded") {
    return {
      statusCode: 422,
      body:
        "Invalid content type. Only application/x-www-form-urlencoded is supported"
    };
  }

  /* When the method is POST, the name will no longer be in the event's
  queryStringParameters – it'll be in the event body encoded as a queryString */
  const params = parseQueryString(event.body);
  const name = params.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};

/*
Converts a string with the shape key1=value1&key2=value2
into an object like {key1: value1, k: value2}
*/
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
