---
title: Netlify Functions
permalink: /
---

# Netlify Functions

## The problem

With sites on Netlify, as with any site on the web, you can allow them to interact with third-party services. JavaScript running on your site can access and interact with APIs, for example sending event data to Google Analytics or adding someone's email to Mailchimp from a HTML form. JavaScript that run on your site are known as 'Client-side JavaScript'.

But what if you want to achieve something more complex? Something that may not be possible with client-side JavaScript alone? Maybe you want to resize images, query a database, or use API tokens that you don't want exposed in your sites' code.

**That’s where Netlify Functions come in.**

## What are Netlify Functions?

Functions are scripts that you can write and deploy directly on Netlify. These functions are hidden from public view, but can be interacted with like any other API service. As with your site code, Netlify takes care of deploying your scripts into functions.

## Who’s it useful for?

Netlify Functions are useful for developers who want to add more functionality to their site and don't want to use, or can't rely entirely on, third-party APIs. Additionally you're not limited to JavaScript, if you want to use Go then you can. Functions are also a great way to keep API credentials private, because they're hidden from public view.

## Why use it?

Functions give you the ability to add extra functionality to your site without overloading your audiences' browser with client-side JavaScript, or risk exposing sensitive information. Here's a list of further examples:

- Interact with protected APIs
- Authentication
- Interacting with databases
- Accessing payment services
- Using secret API keys
- Run libraries that only work on the backend
- Manipulate data
- Running large processes such as image manipulation

Functions are great for cases like this. They act like your own custom API and only run when you request for them, returning the data you need on a on-demand basis.

Want to learn more? Head on over to the [Netlify Functions product page](https://www.netlify.com/products/functions/).
