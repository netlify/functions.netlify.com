exports.handler = async (event, context) => {
  /* Let's take a look at what’s available in those arguments we're getting */
  console.log({ event, context });

  /* Get the name from the query string parameters */
  const { queryStringParameters } = event;
  const name = queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
