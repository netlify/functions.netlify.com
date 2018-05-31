# Netlify Functions example

Hi there! This is my playground repo to test out [Netlify’s Lambda Functions](https://www.netlify.com/docs/functions). You can see a live
demo of the examples at https://functions-playground.netlify.com.

If you want your own copy to play around with, the quickest way to get it up
and running is clicking the Deploy to Netlify button below. It will clone
this repository into your own account, and deploy the site to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/imorente/netlify-functions-example)

To run the examples locally, here’s what you’ll need:

## System Requirements

* [git](https://git-scm.com)
* [NodeJS](nodejs.org) 8 or greater
* [yarn](yarnpkg.com)

## Setup

`cd` into your local copy of the repository and run `yarn`

```
cd netlify-functions-example
yarn
```

## Running the examples

```
yarn start
```

This will start the client server on http://localhost:8080, and the netlify-lambda server on http://localhost:9000.

[netlify-lambda](https://github.com/netlify/netlify-lambda) isn’t required to deploy Lambda functions to Netlify, but it offers some handy features out of the box that make it quicker to get started, like the local dev server and nice defaults for transpiling and bundling functions in production.

The client server is configured to proxy `/.netlify` requests to the Lambda server (see [webpack.client.js](webpack.client.js)). This is the same behavior the site has when it’s deployed to Netlify.
