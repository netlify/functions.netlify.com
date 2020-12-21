---
title: Frequently asked questions
---

## The problem

When you build and deploy sites on Netlify, you can interact with third-party services and APIs with javascript places directly in your site. For example, you can have a script that sends event data to google analytics, or adds someone to a Mailchimp list, or sends a request to a Zapier webhook.

But what if you want to write scripts with something other than javascript? Or if you want to do more complex things like resize images or query a database? Or if you have sensitive information in your script such as API tokens that you don’t want embedded on your site and visible to all? Or if there is no service or API that does what you need?

That’s where Netlify Functions come in.

## What is Netlify Functions?

Functions are scripts that you write and deploy with Netlify. The function’s code is hidden from the public, but you can interact with it like any other API service. As with your site code, Netlify takes care of deploying your scripts into functions.

## Who is Netlify Functions useful for?

This is useful for developers who want to add more functionality to their sites and don’t want to or can’t rely entirely on third-party APIs, or want to use a language other than JavaScript, or don’t want to expose their scripts to site visitors.

## Why use Netlify Functions?

Despite all the benefits of serverless sites, there were many things you couldn’t do with client-side JavaScript:

- Interact with protected APIs such as databases or payment processing services, because the secret API keys would be exposed to the world.

- Run large workloads such as image handling or searching large amounts of data they would take too long to run in the browser.

You would want to use Functions if you want to deploy scripts that can be run on-demand and return results like a regular API, that run on high-powered servers for low latency, that can be written in Go or JavaScript, and that keeps the underlying code (and any secrets inside) hidden from the world.
