exports.handler = function(event, context, callback) {
  console.log({ event, context });
  const { queryStringParameters } = event;
  const name = queryStringParameters.name || "World";

  callback(null, {
    statusCode: 200,
    body: `Hello, ${name}`
  });
};
