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
        {
            method: 'GET',
            path: '/review-product-stats/:productId',
            handler: 'custom-controller.productStats',
            config: {
                auth: false,
            },
        },
    ],
};
