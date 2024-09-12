"use strict";

/**
 * team controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::team.team", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::team.team").findOne({
      where: { slug: id },
      populate: ["deep"],
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
