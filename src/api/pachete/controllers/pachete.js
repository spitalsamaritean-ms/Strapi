"use strict";

/**
 * pachete controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::pachete.pachete", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::pachete.pachete").findOne({
      where: { slug: id },
      populate: ["deep"],
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
