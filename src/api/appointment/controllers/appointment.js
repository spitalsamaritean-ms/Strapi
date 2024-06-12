'use strict';

/**
 * appointment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::appointment.appointment", ({ strapi }) => ({
    async create(ctx) {
      const { body } = ctx.request;
      const service = await strapi.entityService.findOne('api::service.service', body.data.service);
      // Populate the service field in the result
      const newAppointment = await strapi.entityService.create('api::appointment.appointment',
        {
          data: {
            first_name: body.data.first_name,
            last_name: body.data.last_name,
            age: body.data.age,
            email: body.data.email,
            phone_number: body.data.phone_number,
            service: service,
            address: body.data.address,
            appointment_date: body.data.appointment_date,
          },
          populate: ['service'],
        }
      );
      return newAppointment;
    },
  })
);
