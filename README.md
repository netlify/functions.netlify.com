# Netlify Functions example

Hi there! This is my playground repo to test out [Netlify’s Lambda Functions](https://www.netlify.com/docs/functions). You can see a live
demo of the examples at https://imorente-functions-example.netlify.com.

If you want to run these examples locally, here’s what you’ll need:

## System Requirements

* [git](https://git-scm.com)
* [NodeJS](nodejs.org) 8 or greater
* [yarn](yarnpkg.com)

## Setup

```
git clone git@github.com:imorente/netlify-functions-example.git
cd netlify-functions-example
yarn
```

## Running the examples

```
yarn start
```

This will start the Lambda server on http://localhost:9000,
and the client server on http://localhost:8080 in development mode.

The client server is configured to proxy `/.netlify` requests to the local Lambda server (see [webpack.development.config](/imorente/netlify-functions-example/blob/master/webpack.development.config)). This is the same behavior the site has when it’s deployed to Netlify.
