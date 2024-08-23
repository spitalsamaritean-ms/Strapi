'use strict';

/**
 * nutrition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nutrition.nutrition');
