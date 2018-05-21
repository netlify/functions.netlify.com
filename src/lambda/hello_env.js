// Don’t try to use an environment variable outside the handler – it won’t be
// defined yet. It will work locally, but not when deployed to AWS.
// const { GREETING } = process.env

exports.handler = async (event, context) => {
  const { GREETING } = process.env;

  return {
    statusCode: 200,
    body: GREETING
  };
};
