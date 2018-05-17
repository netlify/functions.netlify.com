/* The inevitable Hello World example, with some sweet syntactic sugar.
With async, we can return the response instead of dealing with callbacks */

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
