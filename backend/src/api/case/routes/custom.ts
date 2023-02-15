module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cases/:slug",
      handler: "case.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
