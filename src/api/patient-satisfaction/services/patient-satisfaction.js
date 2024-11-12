'use strict';

/**
 * patient-satisfaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-satisfaction.patient-satisfaction');
