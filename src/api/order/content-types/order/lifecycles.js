module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Fetch the full details of the created order
    const fullOrder = await strapi.entityService.findOne(
      "api::order.order",
      result.id,
      {
        populate: {
          billing: true,
          delivery: true,
          product_list: true,
        },
      }
    );

    // console.log(fullOrder);

    // Extract user details
    const name = fullOrder.billing.first_name;
    const lastname = fullOrder.billing.last_name;
    const email = fullOrder.billing.email;
    const phone = fullOrder.billing.phone_number;
    const message = fullOrder.message;

    // Extract delivery details, use billing details if delivery is missing
    const deliveryCounty =
      fullOrder.delivery.delivery_county || fullOrder.billing.billing_county;
    const deliveryLocalities =
      fullOrder.delivery.delivery_localities ||
      fullOrder.billing.billing_localities;
    const deliveryAddress =
      fullOrder.delivery.delivery_address || fullOrder.billing.billing_address;
    const deliveryZipcode =
      fullOrder.delivery.delivery_zipcode || fullOrder.billing.billing_zipcode;

    // Extract product list
    const products = fullOrder.product_list.map((product) => ({
      name: product.product_name,
      quantity: product.product_order_quantity,
      price: product.product_order_price,
    }));

    // Calculate total price
    const total = fullOrder.full_order_price;

    try {
      // Send templated email to user
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: email,
          from: "no-reply@spitalulsamaritean.ro",
        },
        {
          templateReferenceId: 10,
          subject: `Vă mulțumim pentru comanda dvs.`,
        },
        {
          USER: {
            firstname: name,
            lastname: lastname,
          },
          order: {
            products: products,
          },
          shipping: {
            county: deliveryCounty,
            localities: deliveryLocalities,
            address: deliveryAddress,
            zipcode: deliveryZipcode,
          },
          total: total,
        }
      );

      // Send notification email to admin
      await strapi.plugins["email"].services.email.send({
        to: "info@spitalulsamaritean.ro",
        from: "no-reply@spitalulsamaritean.ro",
        subject: "Comandă Nouă",
        html: `
          Nume: ${name}<br>
          Prenume: ${lastname}<br>
          Email: ${email}<br>
          Telefon: ${phone}<br>
          Mesaj: ${message}<br>
          <br>
          Detalii comandă:<br>
          ${products
            .map(
              (product) =>
                `- ${product.name} (Cantitate: ${product.quantity}, Preț: ${product.price})`
            )
            .join("<br>")}
          <br>
          Total: ${total}<br>
          <br>
          Detalii de livrare:<br>
          Județ: ${deliveryCounty}<br>
          Localitate: ${deliveryLocalities}<br>
          Adresă: ${deliveryAddress ? deliveryAddress : "N/A"}<br>
          Cod poștal: ${deliveryZipcode ? deliveryZipcode : "N/A"}<br>
        `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
