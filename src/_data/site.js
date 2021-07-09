const { URL = "" } = process.env;

module.exports = {
  title: "Netlify Functions",
  parentTitle: "Netlify",
  childTitle: "Functions",
  description: "With Netlify Functions, you can enjoy all the same powerful workflows and abilities when building serverless functions, as with the rest of your site.",
  author: "Netlify",
  twitter: "Netlify",
  image: "/assets/images/logos/logo.png",

  parentUrl: "https://netlify.com",
  url: "https://functions.netlify.com",
  logo: "/assets/images/logos/logo.svg",
  logoChild: "/assets/images/logos/functions.svg",
  lang: "en-US",

  navigation: [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/examples/",
      title: "Examples",
    },
    {
      url: "/tutorials/",
      title: "Tutorials",
    },
    {
      url: "https://explorers.netlify.com/learn/up-and-running-with-serverless-functions",
      title: "Up & running with serverless",
    },
    {
      url: "https://frontendmasters.com/workshops/serverless-functions/",
      title: "Intro to serverless",
    },
    {
      url: "/playground/",
      title: "Playground",
    },
    {
      url: "https://docs.netlify.com/functions/overview/",
      title: "Documentation",
    },
  ],

  navigationSecondary: [
    {
      url: "https://github.com/netlify/functions.netlify.com/",
      title: "Contribute",
    },
    {
      url: "https://app.netlify.com/",
      title: "Log in",
    },
    {
      url: "https://app.netlify.com/signup",
      title: "Sign up &rarr;",
    },
  ],

  google_analytics: false,
  google_analytics_anonymize_ip: false,

  theme_color: "#15847d",
  theme_color_background: "#f5f8f9",
  favicons: [
    {
      size: "16",
      path: "/assets/images/favicons/logo@16px.png",
    },
    {
      size: "32",
      path: "/assets/images/favicons/logo@32px.png",
    },
    {
      size: "96",
      path: "/assets/images/favicons/logo@96px.png",
    },
    {
      size: "120",
      path: "/assets/images/favicons/logo@120px.png",
    },
    {
      size: "144",
      path: "/assets/images/favicons/logo@144px.png",
    },
    {
      size: "180",
      path: "/assets/images/favicons/logo@180px.png",
    },
    {
      size: "512",
      path: "/assets/images/favicons/logo@512px.png",
    },
    {
      size: "1024",
      path: "/assets/images/favicons/logo@1024px.png",
    },
  ],
};
