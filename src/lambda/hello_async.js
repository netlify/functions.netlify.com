/* The inevitable Hello World example, with some sweet syntactic sugar */
exports.handler = async (event, context) => {
  /* With async, we can just return the response, instead of dealing with
  callbacks */
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
