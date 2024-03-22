'use strict';

/**
 * feeback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feeback.feeback');
