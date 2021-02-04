const { URL = "", REPO = "" } = process.env;

module.exports = {
  title: "Netlify Functions",
  parentTitle: "Netlify",
  childTitle: "Functions",
  description: "Functions are scripts that you write and deploy with Netlify.",
  repo: REPO,
  author: "Netlify",
  twitter: "Netlify",
  image: "/assets/images/logos/logo.png",

  parentUrl: "https://netlify.com",
  url: URL,
  logo: "/assets/images/logos/logo.svg",
  logoChild: "/assets/images/logos/functions.svg",
  lang: "en-US",

  navigation: [
    {
      url: "/",
      title: "Home"
    },
    {
      url: "/examples/",
      title: "Examples"
    },
    {
      url: "/tutorials/",
      title: "Tutorials"
    },
    {
      url: "/playground/",
      title: "Playground"
    },
    {
      url: "https://docs.netlify.com/functions/overview/",
      title: "Documentation"
    }
  ],

  google_analytics: false,
  google_analytics_anonymize_ip: false,
  examples: {
    emptyMessage:
      "<p><strong>Sorry but we couldn't find the function you were looking for.</strong></p><p> Try using the 'Browse by tag' option above. Alternatively you can write your very own custom Netlify function, check out <a href='https://docs.netlify.com/functions/overview/'>our documentation for more information</a>.</p>"
  },

  theme_color: "#15847d",
  theme_color_background: "#f5f8f9",
  favicons: [
    {
      size: "16",
      path: "/assets/images/favicons/logo@16px.png"
    },
    {
      size: "32",
      path: "/assets/images/favicons/logo@32px.png"
    },
    {
      size: "96",
      path: "/assets/images/favicons/logo@96px.png"
    },
    {
      size: "120",
      path: "/assets/images/favicons/logo@120px.png"
    },
    {
      size: "144",
      path: "/assets/images/favicons/logo@144px.png"
    },
    {
      size: "180",
      path: "/assets/images/favicons/logo@180px.png"
    },
    {
      size: "512",
      path: "/assets/images/favicons/logo@512px.png"
    },
    {
      size: "1024",
      path: "/assets/images/favicons/logo@1024px.png"
    }
  ]
};
