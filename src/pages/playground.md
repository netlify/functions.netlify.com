---
title: Playground
---

# Functions playground

Hi there! This is a playground to try out a variety of [Netlify Functions](https://docs.netlify.com/functions/overview/). You can browse the code for these examples in our [GitHub repo](https://github.com/{{ pkg.repository }}/tree/main/src/functions).

## Hello, World!

The inevitable Hello World example.

```js
{% include "src/functions/hello.js" %}
```

### Try it out

[Say hello!](/.netlify/functions/hello)

## Hello, World! (async version)

The Hello World example can get sweeter with some async syntactic sugar. With async, we can return the response instead of dealing with callbacks.

```js
{% include "src/functions/hello_async.js" %}
```

### Try it out

[Say hello!](/.netlify/functions/hello_async)

## Hello, {name}

Customize the greeting calling the Lambda endpoint with an optional `name` parameter.

```js
{% include "src/functions/hello_name.js" %}
```

### Try it out

<form class="form-example" action="/.netlify/functions/hello_name">
  <label>
    What’s your name?
    <input type="text" name="name">
  </label>
  <button class="button" type="submit">Say hello!</button>
</form>

## Hello, {name} (POST version)

Let’s make sure we only process POST requests for our customized greeting.

```js
{% include "src/functions/hello_name_post.js" %}
```

### Try it out

<form class="form-example" action="/.netlify/functions/hello_name_post" method="POST">
  <label>
    What’s your name?
    <input type="text" name="name">
  </label>
  <button class="button" type="submit">Say hello!</button>
</form>

[Show me the error](/.netlify/functions/hello_name_post?name=Me)

## Read environment variables

Storing secrets like API tokens can be tricky in web apps. Lambdas and environment variables to the rescue!

For this example, I’m using dotenv to define environment variables locally (in a real project, I wouldn’t commit that file to the repository!), and defining those same variables in the Netlify site dashboard under Settings > Build & deploy > Build environment variables, for production.

Note: environment variables get baked into your function at deploy time, so you need to trigger a new deploy after you change them.

```js
{% include "src/functions/hello_env.js" %}
```

### Try it out

[Show me the environment variable](/.netlify/functions/hello_env)

## Fetch

I see you like APIs! I’ll put an API in your API so you can API while you API.

```js
{% include "src/functions/hello_fetch.js" %}
```

### Try it out

[Tell me a joke!](/.netlify/functions/hello_fetch)

## Send a Slack message

Putting it all together: send a message to a Slack channel.

You’ll need a Slack account to replicate this example on your own site (if you don’t already have a Slack account, you can create one for free).

1. Create a Slack incoming webhook at https://my.slack.com/services/new/incoming-webhook/

2. To test the function locally, add the Slack webhook URL to the .env file in the root folder of your repository.

```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/XXXXXXXXXX
```

3. To test the function in your deployed site, sign in to your Netlify dashboard, add the environment variable to your site’s Settings > Build & Deploy > Build environment variables, and trigger a new deploy.

```js
{% include "src/functions/hello_slack.js" %}
```

### Try it out

<form class="form-example" action="/.netlify/functions/hello_slack" method="POST">
  <label>
    What’s your name?
    <input type="text" name="name">
  </label>
  <button class="button" type="submit">Say hello!</button>
</form>

Once you've made a submission you'll see a message appear in [our Jamstack Slack](https://jamstack.org/slack), log in or sign up and navigate to the #netlify-functions-demo channel to see the message you triggered:

<img src="/assets/images/uploads/slack-notification-example.png" alt="Example Slack notifiction" width="440"/>
