module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const name = result.name;
    const lastname = result.lastname;
    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: "attila2000.03.05@gmail.com",
          from: "noreply@dixiflor.ro",
        },
        {
          templateReferenceId: 2,
          subject: `Thank you for your order`,
        }
      );
      await strapi.plugins["email"].services.email.send(
        {
          to: "attila2000.03.05@gmail.com",
          from: "noreply@dixiflor.ro",
          subject: "Contact Form",
          html: `${result.email}<br>${result.name}`,
        },
        {
          templateReferenceId: 1,
          subject: `Thank you for your order`,
        },
        {
          name: name,
          lastname: lastname,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
