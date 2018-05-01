# Netlify Functions example

Hi there! This is my playground repo to test out [Netlify’s Lambda Functions](https://www.netlify.com/docs/functions). You can see a live
demo of the examples at https://imorente-functions-example.netlify.com.

To run the examples locally, here’s what you’ll need:

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

This will start the client server on http://localhost:8080, and the netlify-lambda server on http://localhost:9000.

[netlify-lambda](https://github.com/netlify/netlify-lambda) isn’t required to deploy Lambda functions to Netlify, but it offers some handy features out of the box that make it quicker to get started, like the local dev server and nice defaults for transpiling and bundling functions in production.

The client server is configured to proxy `/.netlify` requests to the Lambda server (see [webpack.config.js](webpack.config.js)). This is the same behavior the site has when it’s deployed to Netlify.
