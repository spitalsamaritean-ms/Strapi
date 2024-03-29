module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const email = result.email;
    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: email,
          from: "no-reply@spitalulsamaritean.ro",
        },
        {
          templateReferenceId: 1,
          subject: `Spitalul Samaritean Newsletter`,
        }
      );
      await strapi.plugins["email"].services.email.send(
        {
          to: "info@spitalulsamaritean.ro",
          from: "no-reply@spitalulsamaritean.ro",
          subject: "Newsletter",
          html: `${result.email}`,
        },
        {
          templateReferenceId: 1,
          subject: `Thank you for your order`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
