/*
The Hello, World example getting just a teeny bit more sophisticated so we can see
how get parameters from the request.
*/
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
