/*
The inevitable Hello World example, with some nice syntactic sugar
*/
exports.handler = async (event, context) => {
  /* With async, we can just return the respose, instead of calling the callback */
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
