"use strict";

/**
 * info-patient controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::info-patient.info-patient",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::info-patient.info-patient")
        .findOne({
          where: { slug: id },
          populate: ["deep"],
        });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
