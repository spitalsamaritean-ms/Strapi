module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const name = result.name;
    const lastname = result.lastname;
    const email = result.email;
    const phone = result.phone;
    const message = result.message;
    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: email,
          from: "no-reply@spitalulsamaritean.ro",
        },
        {
          templateReferenceId: 2,
          subject: `Spitalul Samaritean Form`,
        },
        {
          name: name,
          lastname: lastname,
        }
      );
      await strapi.plugins["email"].services.email.send({
        to: "office@spitalulsamaritean.ro",
        from: "no-reply@spitalulsamaritean.ro",
        subject: "Contact Form",
        html: `
        Nume: ${name}<br>
        Prenume: ${lastname}<br>
        Email: ${email}<br>
        Telefon: ${phone}<br>
        Messaj: ${message}<br>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
