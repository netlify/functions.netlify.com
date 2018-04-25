exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  /* When the method is POST, the name will no longer be in the event's
  queryStringParameters – it'll be in the event body encoded as a queryString */
  const params = parseQueryString(event.body);
  console.log({ params });

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
