'use strict';

/**
 * deepl-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deepl-test.deepl-test');
