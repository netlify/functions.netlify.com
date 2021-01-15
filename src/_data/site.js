const { URL = "" } = process.env;

module.exports = {
  title: "Netlify Functions",
  description: "Functions are scripts that you write and deploy with Netlify.",
  url: "https://functions-netlify.netlify.app/",
  repo: "https://github.com/daviddarnes/functions.netlify.com",
  author: "Netlify",
  twitter: "Netlify",
  image: "/assets/images/logos/logo.png",

  url: URL,
  logo: "/assets/images/logos/logo.svg",

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
      url: "https://docs.netlify.com/functions/overview/",
      title: "Documentation"
    }
  ],

  google_analytics: false,
  google_analytics_anonymize_ip: false,
  examples: {
    emptyMessage: "Sorry but nothing could be found. Try browsing a tag 👈"
  },

  theme_color: "#f5f8f9",
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
