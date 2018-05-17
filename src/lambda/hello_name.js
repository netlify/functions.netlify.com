/* Our Hello World is getting more sophisticated! Customize the greeting passing
an optional `name` parameter to the function */

exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
