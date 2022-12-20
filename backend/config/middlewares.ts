export default [
  "strapi::errors",
  "strapi::security",
  // "strapi::cors",

  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      origin: "*",
      headers: "*",
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
