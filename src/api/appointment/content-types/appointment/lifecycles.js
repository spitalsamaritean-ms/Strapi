module.exports = {
  async afterCreate(event) {
    const { result, params } = event;
    const lastname = result.last_name;
    const firstname = result.first_name;
    const phone = result.phone_number;
    const email = result.email;
    const address = result.address;
    const age = result.age;
    console.log(event);
    const service = result.service.title;
    const appointment_date = result.appointment_date ? result.appointment_date : null;

    try {
        // await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        //   {
        //     to: email,
        //     from: "no-reply@spitalulsamaritean.ro",
        //   },
        //   {
        //     templateReferenceId: 2,
        //     subject: `Spitalul Samaritean Form`,
        //   },
        //   {
        //     name: firstname,
        //     lastname: lastname,
        //   }
        // );
        await strapi.plugins["email"].services.email.send({
          //to: "info@spitalulsamaritean.ro",
          to: "info@spitalulsamaritean.ro",
          from: "no-reply@spitalulsamaritean.ro",
          subject: "Appointment Request",
          html: `
          Prenume: ${lastname}<br>
          Nume: ${firstname}<br>
          Telefon: ${phone}<br>
          Email: ${email}<br>
          Domiciliu: ${address}<br>
          Vârstă: ${age}<br>
          Serviciu: ${service}<br>
          ${appointment_date ? "Data internări: " + appointment_date + "<br>" : ""}`,

        });
    } catch (err) {
        console.log(err);
    }
  },
};
