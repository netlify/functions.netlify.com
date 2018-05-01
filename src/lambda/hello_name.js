/* Our Hello, World is getting more sophisticated. We look for a `name`
parameter in the query string to customize the greeting. */
exports.handler = async (event, context) => {
  /* Inspect the arguments to see what properties and functions we have
  available */
  console.log({ event, context });

  /* queryStringParameters sounds promising. Get the `name` from it, and
  fall back to rendering "World" if name is not present */
  const { queryStringParameters } = event;
  const name = queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
