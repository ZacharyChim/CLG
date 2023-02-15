/**
 * case controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::case.case",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::case.case").findOne({
        where: { slug: id },
        populate: ["featuredImage"],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
