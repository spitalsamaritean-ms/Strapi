'use strict';

/**
 * info-patient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-patient.info-patient');
