# Netlify Functions examples

Hi there! This is a playground repo to test out [Netlify’s Lambda Functions](https://www.netlify.com/docs/functions). You can see a live
demo of the examples at https://functions-playground.netlify.com.

If you want your own copy to play around with, the quickest way to get it up
and running is clicking the Deploy to Netlify button below. It will clone
this repository into your own account, and deploy the site to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-functions-example)

## Table of Contents
<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand)
  generated w/ `npm run docs`
-->
<details>
<summary>Click to expand</summary>

- [Setup](#setup)
- [Running the examples](#running-the-examples)
- [Community Function Examples](#community-function-examples)
- [Contributing](#contributing)
  * [Adding an example](#adding-an-example)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Setup

To run the examples locally, here’s what you’ll need:

**System Requirements:**

* [git](https://git-scm.com)
* [NodeJS](nodejs.org) 8 or greater
* [yarn](yarnpkg.com)

`cd` into your local copy of the repository and run `yarn` or `npm install`

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


## Community Function Examples

[Add an example](#adding-an-example)

<!-- AUTO-GENERATED-CONTENT:START (EXAMPLES_TABLE)-->
| Example | Author |
|:-------|:------:|
| **[Bus Schedule Tracker](https://github.com/edumentab/my-next-bus/blob/master/src/functions/departures.js)** <br/> Tracking bus schedules  | [edumentab](http://github.com/edumentab) |
| **[Contentful Authless Comments](https://github.com/shaunpersad/authless-comments-example)** <br/> Contentful authless comments  | [shaunpersad](http://github.com/shaunpersad) |
| **[Contentful Image Saver](https://github.com/mirshko/contentful-lambda/blob/master/src/lambda/createImageEntry.js)** <br/> Save images to contentful | [mirshko](http://github.com/mirshko) |
| **[Create React App Lambda](https://github.com/netlify/create-react-app-lambda)** <br/> Create React App with baked in Netlify functions support | [netlify](http://github.com/netlify) |
| **[Detect Csp Violations](https://github.com/stefanjudis/stefan-judis-website/blob/020f1b005cb1fcf4da8afa4407d9514917aecda0/functions/report.js)** <br/> CSP violations reporting by setting the lambda URL as the CSP report-uri | [stefanjudis](http://github.com/stefanjudis) |
| **[Fetch Files From Google Drive](https://github.com/JustinBeckwith/fileLister/blob/91b7af9fad934b519343d856753469744289bfbb/src/files.js)** <br/> List files from google drive API | [JustinBeckwith](http://github.com/JustinBeckwith) |
| **[Form Spam Filter](https://github.com/chrisjm/chrisjmears.com/blob/0361a03991b6a9ddd27d0514bc714b29a37908e2/js/spam-filter.js)** <br/> Filter form spam and send to Zapier webhook | [chrisjm](http://github.com/chrisjm) |
| **[Get Items From Cosmicjs](https://github.com/aslanvaroqua/netlambda/blob/master/netlify-lambda/objects.js)** <br/> List out objects from cosmicjs  | [aslanvaroqua](http://github.com/aslanvaroqua) |
| **[Get Weather Via Openweathermap](https://github.com/mattburrell/wishyouwerehere/blob/master/src/lambda/weatherHandler.js)** <br/> Get the weather via openweathermap  | [mattburrell](http://github.com/mattburrell) |
| **[Ifttt To Flick Instagram Make New Github Post](https://github.com/rretsiem/renem.net/blob/574b1c5091e993b520e23f993a6c46069e92cdb0/src/functions/flickr-webhook.js)** <br/> Webhook from IFTTT when new Flickr photo with tag #blog create github file and post. Automated photo blog [view the project](https://renem.net/photos/) | [rretsiem](http://github.com/rretsiem) |
| **[Intercom As Oauth Login](https://github.com/DavidWells/intercom-netlify-oauth)** <br/> Oauth via intercom  | [DavidWells](http://github.com/DavidWells) |
| **[Lookup Dns](https://github.com/HJGreen/who-owns/blob/master/lambda-src/dns.js)** <br/> DNS lookup of a site | [HJGreen](http://github.com/HJGreen) |
| **[Mailchimp Landing Page](https://github.com/tobilg/netlify-functions-landingpage/blob/169de175d04b165b5d4801b09cb250cd9a740da5/src/lambda/signup.js)** <br/> Landing page with mailchimp | [tobilg](http://github.com/tobilg) |
| **[Mongodb And Functions](https://github.com/maciejmatu/smoothielicious/tree/b7a5a76eb29af076ed228c9b5d190fb56d0df1d2/src/lambda)** <br/> Using mongoDB + functions  [view the project](https://blog.elpassion.com/jam-stack-your-old-cms-into-the-closet-12cad2c7b1b3) | [maciejmatu](http://github.com/maciejmatu) |
| **[Netlify Functions Apollo Graphql](https://github.com/stubailo/apollo-netlify-lambda-app)** <br/> Deploying Apollo graphql on netlify functions  [view the project](https://blog.apollographql.com/deploy-a-fullstack-apollo-app-with-netlify-45a7dfd51b0b) | [stubailo](http://github.com/stubailo) |
| **[Netlify Functions As Zips](https://github.com/DavidWells/function-zips)** <br/> Functions as zips  | [DavidWells](http://github.com/DavidWells) |
| **[Netlify Functions Crud App With Fauna](https://github.com/netlify/netlify-faunadb-example)** <br/> Using faunaDB as datastore  | [netlify](http://github.com/netlify) |
| **[Netlify Functions Express](https://github.com/DavidWells/netlify-functions-express)** <br/> Using express with netlify functions | [DavidWells](http://github.com/DavidWells) |
| **[Netlify Functions Gated Sites](https://github.com/DavidWells/netlify-gated-sites/tree/master/okta)** <br/> Gating multiple sites with Okta  | [DavidWells](http://github.com/DavidWells) |
| **[Netlify Headless Site](https://github.com/rabbah/www/tree/56a7ce1a24df26db571719c6805242b1ff121617/src)** <br/> Serve entire site via Netlify functions + dynamic serverside HTML rendering | [rabbah](http://github.com/rabbah) |
| **[Ping Superfeedr On Deploy](https://github.com/anarchivist/matienzo.org/blob/80d1a840fffa6ed9f1bd940ee4635aa4da39cd14/_functions/deploy-succeeded.js)** <br/> Ping Superfeedr RSS, Atom, or JSON feeds on successful deploy. Uses event driven functions | [anarchivist](http://github.com/anarchivist) |
| **[Process Upload Send To Trello Slack Mailgun](https://github.com/NimbusForWork/nimbusforwork.com/blob/6641ee3d5a1faad3deb6bc5734ae05b521bb9b3b/src/lambda/form.js)** <br/> Process form file upload and send to results to trello, slack, & mailgun | [NimbusForWork](http://github.com/NimbusForWork) |
| **[Progressive Form Enhancement Via Functions](https://github.com/DavidWells/progressive-enhancement-form-functions/blob/master/functions/form-handler.js)** <br/> Handle Ajax & normal form POST submissions via functions [view the project](https://progressive-enhancement-form.netlify.com/) | [DavidWells](http://github.com/DavidWells) |
| **[Proxy Blocked Google Analytics](https://github.com/codeniko/simple-tracker/blob/master/examples/server-examples/aws-lambda/google-analytics.js)** <br/> Proxy pageviews to google analytics incase google analytics is blocked on the client side | [codeniko](http://github.com/codeniko) |
| **[Proxy Tracking Data To Loggly](https://github.com/codeniko/simple-tracker/blob/master/examples/server-examples/aws-lambda/track.js)** <br/> proxy arbitrary tracking data to a log management service Loggly  | [codeniko](http://github.com/codeniko) |
| **[Save Data To Google Sheets](https://github.com/grod220/CCS-B.B.Warfield/blob/master/lambda/googleSheets.js)** <br/> Save emails to googlesheets  | [grod220](http://github.com/grod220) |
| **[Save Twitch Clips Save To Postgres](https://github.com/stphnchoe/twitchClips/blob/master/src/lambda/handler.js)** <br/> Grab clips from twitch and insert into postgres database | [stphnchoe](http://github.com/stphnchoe) |
| **[Scrape Twitter Avatars](https://github.com/philhawksworth/twavatar)** <br/> Scrape mobile twitter HTML to return the URLs of a user avatar:  [view the project](https://twavatar.netlify.com/) | [philhawksworth](http://github.com/philhawksworth) |
| **[Send Custom Netlify Build Slack Notification](https://github.com/mirshko/netlify-status-topic)** <br/> Custom netlify build status in slack  | [mirshko](http://github.com/mirshko) |
| **[Send Email Via Aws Sns](https://github.com/frzng/jamstack-experiments/blob/08f8a7edc014e076334a4d72e29e34ccdedcb8b1/_hooks/send-question.js)** <br/> Sends a question submitted from HTML question form via AWS SES. This example connects to an external AWS account | [frzng](http://github.com/frzng) |
| **[Send Email Via Nodemailer](https://github.com/kicholen/makeithappen/blob/79b9c8f3a7238dc75308f9a69d769d7cda7dd522/func/sendMail.js)** <br/> send email via nodemailer  | [kicholen](http://github.com/kicholen) |
| **[Serverless Auth Strategies](https://github.com/DavidWells/serverless-auth-strategies)** <br/> How to protected & scoped down functions to specific users | [DavidWells](http://github.com/DavidWells) |
| **[Serverside Hashing](https://github.com/SquishyCat/netlify_lambda/blob/master/netlify-lambda/hash.js)** <br/> Serverside hashing via crypto  | [SquishyCat](http://github.com/SquishyCat) |
| **[Stripe Payment Processing](https://github.com/alexmacarthur/netlify-lambda-function-example/blob/68a0cdc05e201d68fe80b0926b0af7ff88f15802/lambda-src/purchase.js#L43)** <br/> stripe payment processing  | [alexmacarthur](http://github.com/alexmacarthur) |
| **[Swambda Openapi](https://github.com/fehguy/swambda)** <br/> Integrate OpenAPI (swagger) specifications and lambda into an easy-to-use routing tier  | [fehguy](http://github.com/fehguy) |
| **[Tokbox Session Manager](https://github.com/slap-dash/slap-dash/tree/master/src/lambda)** <br/> Build live interactive video, voice and messaging into your web and mobile apps via tokbox | [slap-dash](http://github.com/slap-dash) |
| **[Token Hider Via Proxy](https://github.com/depadiernos/token-hider)** <br/> Token hider api passthrough proxy | [depadiernos](http://github.com/depadiernos) |
| **[Url Shortening Service](https://github.com/philhawksworth/linkylinky/tree/master/src/lambda)** <br/> URL shortening service  | [philhawksworth](http://github.com/philhawksworth) |
| **[Verify Okta](https://github.com/netlify/verify-okta)** <br/> Verify an Okta token with Go | [netlify](http://github.com/netlify) |
<!-- AUTO-GENERATED-CONTENT:END -->

## Contributing

We are happy to accept more examples from the [community](https://gitter.im/netlify/lambda-functions)

### Adding an example

1. Add your example to `examples.json`

  Make sure to include the following fields. If there is no live demo/blog post etc, you can omit the `url` from the object.

  ```
  {
    "name": "netlify-functions-apollo-graphql",
    "description": "Deploying Apollo graphql on netlify functions ",
    "code": "https://github.com/stubailo/apollo-netlify-lambda-app",
    "url": "https://blog.apollographql.com/deploy-a-fullstack-apollo-app-with-netlify-45a7dfd51b0b"
  }
  ```

2. Regenerate the `README.md` with the following command

  ```bash
  npm run docs
  ```

3. Open a new pull request with your example.

