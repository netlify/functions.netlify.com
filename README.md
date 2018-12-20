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
- [Tutorials](#tutorials)
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
| **[Airtable As Database](https://github.com/adenin-sites/NowAssistant.com/blob/b3f79c441a781a082c06e7ce27678e99fd8b1258/lambda-src/job-application.js)** <br/> Using Airtable as a database | [adenin-sites](http://github.com/adenin-sites) |
| **[Bart Station Departures](https://github.com/philipbordallo/stand-clear/blob/912c8a454aff7373e1404a871185e2485957494f/src/server/functions/departures.js)** <br/> Get the SF BART Station Departures | [philipbordallo](http://github.com/philipbordallo) |
| **[Behance Rss Feed](https://github.com/jhackett1/joshuahackett/blob/f137f5283841c8312eb86196737462dff107cc26/src/functions/get-projects.js)** <br/> Fetch RSS feed from behance | [jhackett1](http://github.com/jhackett1) |
| **[Check Weather Forcast](https://github.com/mikesprague/localweather-io/blob/f1ae3d72900cd514ac27c65ab6dec70aafdb9362/src/functions/weather.js)** <br/> Check the weather forcast with bugsnag for debugging | [mikesprague](http://github.com/mikesprague) |
| **[Chuck Norris Quote Generator](https://github.com/auchau/crowdroar_netlify/blob/154a5e7a8f07669da6cdcf932eebdc123a3b38d8/src/lambda/async-chuck-norris.js)** <br/> Fetch Chuck Norris quotes | [auchau](http://github.com/auchau) |
| **[Contact Form With Airtable & Mailgun](https://github.com/stefanjudis/service-party/blob/e744e42b26e48a43f95a5491515a133791dab6fb/src/lambda/contact.js)** <br/> Process contact form submission and store in airtable | [stefanjudis](http://github.com/stefanjudis) |
| **[Create New User In Firebase](https://github.com/believelody/itmproject/blob/a224427f7b39dbada1ffca296349cc38b16419d8/functions/create-user.js)** <br/> Create new user in firebase admin | [believelody](http://github.com/believelody) |
| **[Dropbox Webhook](https://github.com/chaseadamsio/chaseadams.io/blob/3f181cd88417dd002c90fff36afb75fe46357e50/src/_netlify-functions/dropbox-webhook.js)** <br/> Dropbox webhook to trigger Netlify builds | [chaseadamsio](http://github.com/chaseadamsio) |
| **[Fetch Instagram Posts](https://github.com/strt/www/blob/7ade34edb0c1d11e5ec7bf4e1fbceece8ff5f078/lambda/src/instagram.js)** <br/> Get recent instagram posts | [strt](http://github.com/strt) |
| **[Fetch Rasperry Pi Url](https://github.com/ZachGawlik/zachgawlik.com/blob/6ae0b7485b8aeba9f440b752d35ca4207153dca1/lambdas/get-pi-url.js)** <br/> Fetch Rasperry pi URL from dataplicity | [ZachGawlik](http://github.com/ZachGawlik) |
| **[Fetch Crypto Currency Prices](https://github.com/iamronsuez/weekend-code/blob/83ccf96dd2506726c329b55188552bb25eae1831/src/functions/price.js)** <br/> Get current bitcoin prices from localbitcoins.com | [iamronsuez](http://github.com/iamronsuez) |
| **[Fetch Currency Rates](https://github.com/dlebech/off-the-books/blob/5c38c42336ccc6a75bfb69ac305fa5e36be71f36/src/lambda/currencies.js)** <br/> Fetch currency rates from eurofxref | [dlebech](http://github.com/dlebech) |
| **[Fetch Currency Rates](https://github.com/dlebech/off-the-books/blob/5c38c42336ccc6a75bfb69ac305fa5e36be71f36/src/lambda/currencies.js)** <br/> Fetch currency rates from eurofxref | [dlebech](http://github.com/dlebech) |
| **[Fetch Github Repos Graphql](https://github.com/kiranbhalerao123/itsmine.ml/blob/3b02341a6ad7d68e040c794a4d8284b344c01c33/src/netlify_lambda/getrepos.js)** <br/> get github repos from graphql endpoint  | [kiranbhalerao123](http://github.com/kiranbhalerao123) |
| **[Github Finder](https://github.com/shayant98/GFServerless)** <br/> Serverless Implementation of GitHub Finder | [shayant98](http://github.com/shayant98) |
| **[Mailchimp Signup Flow](https://github.com/smkkstudios/pairity/blob/b366ec13c54f4782e16f79c18d1795e10c574102/functions/signUp.js)** <br/> Netlify functions + subscribe users to mailchimp | [smkkstudios](http://github.com/smkkstudios) |
| **[Medium Rss Feed](https://github.com/jhackett1/joshuahackett/blob/f137f5283841c8312eb86196737462dff107cc26/src/functions/get-posts.js)** <br/> Fetch RSS feed from medium | [jhackett1](http://github.com/jhackett1) |
| **[Meetup Raffle](https://github.com/wKovacs64/meetup-raffle/blob/bb32bc10d9bb355e252602873167339073a3f2fa/src/functions/draw.js)** <br/> Draw raffle winners at your Meetup event via meetup.com API | [wKovacs64](http://github.com/wKovacs64) |
| **[Myanimelist Search Api](https://github.com/destruc7i0n/nani/tree/5063b1abb087f719fc96eeffcb904b631624dc63/src/lambda)** <br/> Search MyAnimeList API | [destruc7i0n](http://github.com/destruc7i0n) |
| **[Netlibox](https://github.com/jimniels/netlibox)** <br/> Netlify + Dropbox using functions + redirects to validate the webhook | [jimniels](http://github.com/jimniels) |
| **[Netlify Form Notifications To Slack](https://github.com/vectronic/website/blob/2f248da49b63d81b142f229acabaa14291bb2fba/src/functions/comment-submitted.js)** <br/> Ping slack on new netlify comments | [vectronic](http://github.com/vectronic) |
| **[Save Zillow Prices](https://github.com/nickmrosen/soldkey/blob/7a219b4bfc943275e3418b792af3f758880141ff/functions/zesty.js)** <br/> Search and save Zillow results to firebase  | [nickmrosen](http://github.com/nickmrosen) |
| **[Send Email Via 'Sendmail' Pkg](https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js)** <br/> Send email with no STMP server via 'sendmail' pkg | [Urigo](http://github.com/Urigo) |
| **[Shopify Ecommerce](https://github.com/NEsfandiari/lipslut2.0/blob/caaf5aac513e81216b82b2fe610d3da868995c4c/lambda-src/createCheckout.js)** <br/> Netlify functions + shopify for an ecommerce store | [NEsfandiari](http://github.com/NEsfandiari) |
| **[Slack Channel Invites](https://github.com/kylemcd/marketers-chat/blob/1a2689e89bfa0277a2ae459a864751e196e73af5/src/lambda/slackSubmit.js)** <br/> Send slack channel invites | [kylemcd](http://github.com/kylemcd) |
| **[Verify Phone Numbers](https://github.com/p8952/SafetyCall/blob/1da9967d4c7fb8112fca67b91f69cac8747a265f/src/functions/verifyNumber.js)** <br/> Verify phone numbers with Authy SMS | [p8952](http://github.com/p8952) |
| **[Airtable Netlify Short Urls](https://github.com/kentcdodds/airtable-netlify-short-urls/blob/dbaef3c4ddd968c5a7a823e7a71552cb5f3a3c07/functions/redirect.js)** <br/> This is a simple short-url service that works with netlify functions and uses airtable. | [kentcdodds](http://github.com/kentcdodds) |
| **[Bus Schedule Tracker](https://github.com/edumentab/my-next-bus/blob/master/src/functions/departures.js)** <br/> Tracking bus schedules  | [edumentab](http://github.com/edumentab) |
| **[Contentful Authless Comments](https://github.com/shaunpersad/authless-comments-example)** <br/> Contentful authless comments  | [shaunpersad](http://github.com/shaunpersad) |
| **[Contentful Image Saver](https://github.com/mirshko/contentful-lambda/blob/master/src/lambda/createImageEntry.js)** <br/> Save images to contentful | [mirshko](http://github.com/mirshko) |
| **[Create React App Lambda](https://github.com/netlify/create-react-app-lambda)** <br/> Create React App with baked in Netlify functions support | [netlify](http://github.com/netlify) |
| **[Detect Csp Violations](https://github.com/stefanjudis/stefan-judis-website/blob/020f1b005cb1fcf4da8afa4407d9514917aecda0/functions/report.js)** <br/> CSP violations reporting by setting the lambda URL as the CSP report-uri | [stefanjudis](http://github.com/stefanjudis) |
| **[Fetch Files From Google Drive](https://github.com/JustinBeckwith/fileLister/blob/91b7af9fad934b519343d856753469744289bfbb/src/files.js)** <br/> List files from google drive API | [JustinBeckwith](http://github.com/JustinBeckwith) |
| **[Form Spam Filter](https://github.com/chrisjm/chrisjmears.com/blob/0361a03991b6a9ddd27d0514bc714b29a37908e2/js/spam-filter.js)** <br/> Filter form spam and send to Zapier webhook | [chrisjm](http://github.com/chrisjm) |
| **[Gatsby And Netlify Functions](https://github.com/snipcart/gatsby-netlify)** <br/> Handling Static Forms, Auth & Serverless Functions with Gatsby on Netlify [view the project](https://gatsby-netlify-snipcart.netlify.com/) | [snipcart](http://github.com/snipcart) |
| **[Gatsby Stripe Store Starter](https://github.com/raae/gatsby-stripe-store-starter/blob/07f993dc551f9a93ceac3b07e657a50dbebb9254/src/lambda/createAndPayStripeOrder.js)** <br/> Gatsby & Netlify functions stripe store | [raae](http://github.com/raae) |
| **[Get Items From Cosmicjs](https://github.com/aslanvaroqua/netlambda/blob/master/netlify-lambda/objects.js)** <br/> List out objects from cosmicjs  | [aslanvaroqua](http://github.com/aslanvaroqua) |
| **[Get Random Emoji](https://github.com/mrozilla/mrozilla.cz/blob/fddf0687b30c1615fccdd085fc7acca0948d8a15/src/lambda/emoji.js)** <br/> Return a random emoji | [mrozilla](http://github.com/mrozilla) |
| **[Get Weather Via Openweathermap](https://github.com/mattburrell/wishyouwerehere/blob/master/src/lambda/weatherHandler.js)** <br/> Get the weather via openweathermap  | [mattburrell](http://github.com/mattburrell) |
| **[Get Youtube Video Captions](https://github.com/nicooprat/diaporama/blob/742c993b89a6000c4033f0752db7dc14fafad9a7/src/lambda/captions.js)** <br/> Get youtube video captions from video ID | [nicooprat](http://github.com/nicooprat) |
| **[Get Youtube Video Data](https://github.com/nicooprat/diaporama/blob/742c993b89a6000c4033f0752db7dc14fafad9a7/src/lambda/video.js)** <br/> Get youtube video data from video ID | [nicooprat](http://github.com/nicooprat) |
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
| **[Netlify Identity Whitelist Emails](https://github.com/escaladesports/react-netlify-form/blob/7d28c95b709055a6fd4e4039248eff1a34af2fc0/src/functions/identity-signup.js)** <br/> Validate emails on Netlify identity signup | [escaladesports](http://github.com/escaladesports) |
| **[Password Protected Netlify Build Trigger](https://github.com/HeapSpace/tehnoloskidorucak/blob/d6c9bffae372aa940a0e1b117b3897408e9357f6/src/fns/build.js)** <br/> Trigger Netlify deploy with password protected function | [HeapSpace](http://github.com/HeapSpace) |
| **[Ping Superfeedr On Deploy](https://github.com/anarchivist/matienzo.org/blob/80d1a840fffa6ed9f1bd940ee4635aa4da39cd14/_functions/deploy-succeeded.js)** <br/> Ping Superfeedr RSS, Atom, or JSON feeds on successful deploy. Uses event driven functions | [anarchivist](http://github.com/anarchivist) |
| **[Post A Tweet](https://github.com/colbyfayock/tweet/blob/0d22f08292bb077f2248329abe9bf37ef7d8bf89/src/tweet.js)** <br/> Post a tweet to Twitter | [colbyfayock](http://github.com/colbyfayock) |
| **[Primsa Graphql Example](https://github.com/auchau/crowdroar_netlify/blob/154a5e7a8f07669da6cdcf932eebdc123a3b38d8/src/lambda/graphql.js)** <br/> Netlify functions + primsa + graphql | [auchau](http://github.com/auchau) |
| **[Process Stripe Payment](https://github.com/alexpriceonline/textjoy/blob/e43098db9fe95aceb47ee72f802df69e0a9667ae/lambda-src/purchase.js)** <br/> Process a stripe payment | [alexpriceonline](http://github.com/alexpriceonline) |
| **[Process Upload Send To Trello Slack Mailgun](https://github.com/NimbusForWork/nimbusforwork.com/blob/6641ee3d5a1faad3deb6bc5734ae05b521bb9b3b/src/lambda/form.js)** <br/> Process form file upload and send to results to trello, slack, & mailgun | [NimbusForWork](http://github.com/NimbusForWork) |
| **[Progressive Form Enhancement Via Functions](https://github.com/DavidWells/progressive-enhancement-form-functions/blob/master/functions/form-handler.js)** <br/> Handle Ajax & normal form POST submissions via functions [view the project](https://progressive-enhancement-form.netlify.com/) | [DavidWells](http://github.com/DavidWells) |
| **[Proxy Blocked Google Analytics](https://github.com/codeniko/simple-tracker/blob/master/examples/server-examples/aws-lambda/google-analytics.js)** <br/> Proxy pageviews to google analytics incase google analytics is blocked on the client side | [codeniko](http://github.com/codeniko) |
| **[Proxy Tracking Data To Loggly](https://github.com/codeniko/simple-tracker/blob/master/examples/server-examples/aws-lambda/track.js)** <br/> proxy arbitrary tracking data to a log management service Loggly  | [codeniko](http://github.com/codeniko) |
| **[Pusher Auth](https://github.com/NathanHeffley/pointer/blob/f12442f416ae9aa3929482142650b358bf50c1ca/src/functions/auth.js)** <br/> Authenication for pusher pub/sub | [NathanHeffley](http://github.com/NathanHeffley) |
| **[Save Data To Google Sheets](https://github.com/grod220/CCS-B.B.Warfield/blob/master/lambda/googleSheets.js)** <br/> Save emails to googlesheets  | [grod220](http://github.com/grod220) |
| **[Save Twitch Clips Save To Postgres](https://github.com/stphnchoe/twitchClips/blob/master/src/lambda/handler.js)** <br/> Grab clips from twitch and insert into postgres database | [stphnchoe](http://github.com/stphnchoe) |
| **[Scrape Parse And Render Dynamic Html](https://github.com/jamesbgl/bgl-amp/blob/e35ebadc5527543d16a6e97d9f8a54ff9771efe5/src/post.js)** <br/> Scrape url, parse with cheerio and render new html out | [jamesbgl](http://github.com/jamesbgl) |
| **[Scrape Twitter Avatars](https://github.com/philhawksworth/twavatar)** <br/> Scrape mobile twitter HTML to return the URLs of a user avatar:  [view the project](https://twavatar.netlify.com/) | [philhawksworth](http://github.com/philhawksworth) |
| **[Send Custom Netlify Build Slack Notification](https://github.com/mirshko/netlify-status-topic)** <br/> Custom netlify build status in slack  | [mirshko](http://github.com/mirshko) |
| **[Send Email Via Aws Sns](https://github.com/frzng/jamstack-experiments/blob/08f8a7edc014e076334a4d72e29e34ccdedcb8b1/_hooks/send-question.js)** <br/> Sends a question submitted from HTML question form via AWS SES. This example connects to an external AWS account | [frzng](http://github.com/frzng) |
| **[Send Email Via Nodemailer](https://github.com/kicholen/makeithappen/blob/79b9c8f3a7238dc75308f9a69d769d7cda7dd522/func/sendMail.js)** <br/> send email via nodemailer | [kicholen](http://github.com/kicholen) |
| **[Send Email Via Sendgrid](https://github.com/francoislesenne/Blog-joellesenne/blob/721bccce911530628d1097a192a5b9828b0032ea/src/sendgrid/app.js)** <br/> send email via sendgrid | [francoislesenne](http://github.com/francoislesenne) |
| **[Serverless Auth Strategies](https://github.com/DavidWells/serverless-auth-strategies)** <br/> How to protected & scoped down functions to specific users | [DavidWells](http://github.com/DavidWells) |
| **[Serverside Hashing](https://github.com/SquishyCat/netlify_lambda/blob/master/netlify-lambda/hash.js)** <br/> Serverside hashing via crypto  | [SquishyCat](http://github.com/SquishyCat) |
| **[Shorten Links With Bitly](https://github.com/nbw/whentochat/blob/fc803cbfdff8f5e46d9bdd9ef381ec3fe2d2350a/src/functions/bitly.js)** <br/> Shorten links with the bit.ly API | [nbw](http://github.com/nbw) |
| **[Stripe Payment Processing](https://github.com/alexmacarthur/netlify-lambda-function-example/blob/68a0cdc05e201d68fe80b0926b0af7ff88f15802/lambda-src/purchase.js#L43)** <br/> stripe payment processing  | [alexmacarthur](http://github.com/alexmacarthur) |
| **[Swambda Openapi](https://github.com/fehguy/swambda)** <br/> Integrate OpenAPI (swagger) specifications and lambda into an easy-to-use routing tier  | [fehguy](http://github.com/fehguy) |
| **[Textjoy](https://github.com/alexpriceonline/textjoy/blob/master/lambda-src/sms.js)** <br/> Weekly inspirational messages via SMS  [view the project](https://textjoy.co/) | [alexpriceonline](http://github.com/alexpriceonline) |
| **[Tokbox Session Manager](https://github.com/slap-dash/slap-dash/tree/master/src/lambda)** <br/> Build live interactive video, voice and messaging into your web and mobile apps via tokbox | [slap-dash](http://github.com/slap-dash) |
| **[Token Hider Via Proxy](https://github.com/depadiernos/token-hider)** <br/> Token hider api passthrough proxy | [depadiernos](http://github.com/depadiernos) |
| **[Url Shortening Service](https://github.com/philhawksworth/linkylinky/tree/master/src/lambda)** <br/> URL shortening service  | [philhawksworth](http://github.com/philhawksworth) |
| **[Using S3 As A Database](https://github.com/walbuc/compound/blob/41e6a60fa697d41b5965665c181827a01828925d/functions/test.js)** <br/> Example of using AWS s3 as a datastore | [walbuc](http://github.com/walbuc) |
| **[Verify Okta](https://github.com/netlify/verify-okta)** <br/> Verify an Okta token with Go | [netlify](http://github.com/netlify) |
<!-- AUTO-GENERATED-CONTENT:END -->

## Tutorials

- [Netlify Functions (Build and Deploy)](https://www.youtube.com/watch?v=_1qXQM3Mt4Q) video

## Contributing

We are happy to accept more examples from the [community](https://gitter.im/netlify/lambda-functions)

### Adding an example

1. Add your example to `examples.json`

  Make sure to include the following fields. If there is no live demo/blog post etc, you can omit the `url` from the object.

  ```json
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

