const { sanitizeEntity } = require("@strapi/utils");

module.exports = {
  async customStats(ctx) {
    const { companyId } = ctx.params;

    const reviews = await strapi.documents("api::review.review").findMany({
      filters: {
        company: {
          documentId: {
            $eq: companyId,
          },
        },
      },
      fields: ["rating"],
      pagination: { pageSize: 1000 }, // Adjust as needed or fetch all
    });

    const totalReviews = reviews.length;
    let totalRating = 0;
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    reviews.forEach((review) => {
      const rating = Math.round(review.rating);
      if (rating >= 1 && rating <= 5) {
        distribution[rating]++;
        totalRating += rating;
      }
    });

    const percentageDistribution = {};
    for (let i = 1; i <= 5; i++) {
      percentageDistribution[i] = totalReviews
        ? Math.round((distribution[i] / totalReviews) * 100)
        : 0;
    }

    const averageRating = totalReviews ? totalRating / totalReviews : 0;

    ctx.body = {
      totalReviews,
      averageRating,
      distribution,
      percentageDistribution,
    };
  },
  async productStats(ctx) {
    const { productId } = ctx.params;

    const reviews = await strapi.documents("api::review.review").findMany({
      filters: {
        service: {
          documentId: {
            $eq: productId,
          },
        },
      },
      fields: ["rating"],
      pagination: { pageSize: 1000 }, // Adjust as needed or fetch all
    });

    const totalReviews = reviews.length;
    let totalRating = 0;
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    reviews.forEach((review) => {
      const rating = Math.round(review.rating);
      if (rating >= 1 && rating <= 5) {
        distribution[rating]++;
        totalRating += rating;
      }
    });

    const percentageDistribution = {};
    for (let i = 1; i <= 5; i++) {
      percentageDistribution[i] = totalReviews
        ? Math.round((distribution[i] / totalReviews) * 100)
        : 0;
    }

    const averageRating = totalReviews ? totalRating / totalReviews : 0;

    ctx.body = {
      totalReviews,
      averageRating,
      distribution,
      percentageDistribution,
    };
  },
};
