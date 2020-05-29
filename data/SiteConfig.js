const config = {
    siteTitle: "Victoria Ubaldo",
    siteTitleShort: "Victoria Ubaldo",
    siteTitleAlt: "Victoria Ubaldo",
    siteUrl: "https://vikyale.github.io",
    siteLogo: "/logos/vickyubaldo.jpg",
    repo: "https://github.com/vikyale/gatsby-blog",
    dateFromFormat: "YYYY-MM-DD",
    dateFormat: "MMMM Do, YYYY",
    siteDescription: "Victoria Ubaldo, Software Developer and Designer of things",
    siteRss: "/rss.xml",
    googleAnalyticsID: "UA-167971997-1",
    postDefaultCategoryID: "code",
    userName: "Victoria",
    userEmail: "viky.ubaldo@gmail.com",
    userTwitter: "vikyale",
    menuLinks: [
      {
        name: "Acerca de mi",
        link: "/acerca-de-mi/"
      }
    ],
    themeColor: "#B90015", // Used for setting manifest and progress theme colors.
    backgroundColor: "#ffffff"
  };
  
  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1);
  
  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== "/")
    config.siteRss = `/${config.siteRss}`;
  
  module.exports = config;
  