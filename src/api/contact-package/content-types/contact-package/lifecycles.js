module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const name = result.firstName;
    const lastname = result.lastname;
    const email = result.email;
    const phone = result.phone;
    const message = result.message;
    const pachet = result.package;
    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: email,
          from: "no-reply@spitalulsamaritean.ro",
        },
        {
          templateReferenceId: 3,
          subject: `Spitalul Samaritean`,
        },
        {
          name: name,
          lastname: lastname,
          pachet: pachet,
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
        Messaj: ${message}<br>
        Pachet: ${pachet}<br>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
