# [functions.netlify.com](https://functions.netlify.com)

Everything you ever wanted to know about Netlify Functions ⚡️

[![Netlify Status](https://api.netlify.com/api/v1/badges/6c383b1d-367f-49ec-acab-ac370c99cd76/deploy-status)](https://app.netlify.com/sites/functions/deploys)

## Contents

- [Adding an example](#adding-an-example-function)
- [Installing](#installing)
- [Command line options](#options)
- [Dependencies](#dependencies)
- [Credits](#credits)


## Suggesting an example or tutorial

Please create an issue in order to submit contributions to be considered for inclusion in this site.

Choose the approprite issue type from the [New Issue](https://github.com/netlify/functions/issues/new/choose) page.


## Installing

1. Clone the repo using `git clone git@github.com:netlify/functions.git`
1. Use npm to install dependencies `npm install`
1. Create a `.env` file with the environment variables listed below
1. And run the site locally `npm run dev`

## Environment variables

You'll need to generate a GitHub Access Token to retrieve stars and forks. Add the following to your `.env` file:

```
URL=http://localhost:8080
GITHUB_TOKEN=
SLACK_WEBHOOK_URL=
GREETING="hi smashingconf"
```

## Options

- `npm run dev` will spin up a development environment and watch for changes
- `npm run build` builds a **production** version of the site to `dist`
- `npm run debug` will the eleventy debugger

## Dependencies

All dependencies are development at the moment

- `@11ty/eleventy`
- `dotenv`
- `@11ty/eleventy-plugin-rss`
- `@11ty/eleventy-plugin-syntaxhighlight`
- `@quasibit/eleventy-plugin-sitemap`
- `eleventy-plugin-sass`
- `eleventy-plugin-seo`

## Credits

- Andy Bell for [modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/)
- Yair Even Or for [Tagify](https://yaireo.github.io/tagify/)
