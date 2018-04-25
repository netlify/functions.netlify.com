/*
The inevitable Hello World example! Yes, this is as useless and as basic as it gets.
Take a look at hello_async.js for some nice syntactic sugar now that AWS Lambda
supports asyc.
 */
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
