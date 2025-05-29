module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/review-stats/:companyId',
      handler: 'custom-controller.customStats',
      config: {
        auth: false,
      },
    },
  ],
};
