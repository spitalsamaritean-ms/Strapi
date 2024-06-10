module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const lastname = event.last_name;
    const firstname = event.first_name;
    const phone = event.phone_number;
    const email = event.email;
    const address = event.address;
    const age = event.age;
    const service = event.result.service.title;
    const appointment_date = event.appointment_date ? event.appointment_date : null;

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
          to: "adorjan.demeny@prismasolutions.ro",
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
