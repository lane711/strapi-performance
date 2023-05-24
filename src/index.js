"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    console.log("=========== creating data ==========");

    //customers
    // const count = 150000;
    // for (let index = 0; index < count; index++) {
    //   const data = {
    //     firstName: faker.person.firstName(),
    //     lastName: faker.person.lastName(),
    //   };
    //   const entry = await strapi.entityService.create("api::customer.customer", {
    //     data,
    //   });
    // }

    //products
    // const count = 250000;
    // for (let index = 0; index < count; index++) {
    //   const data = {
    //     name: faker.commerce.product(),
    //     cost: faker.commerce.price(),
    //   };
    //   const result = await strapi.entityService.create("api::product.product", {
    //     data,
    //   });
    //   console.log('result', result)
    // }

    //orders
    // const count = 500000;
    // for (let index = 0; index < count; index++) {
    //   const data = {
    //     paymentCompleteOn: faker.date.recent(),
    //     total: faker.commerce.price(),
    //   };
    //   const result = await strapi.entityService.create("api::order.order", {
    //     data,
    //   });
    //   console.log('result', result)
    // }

    //orders details
    // const count = 1000000;
    // for (let index = 0; index < count; index++) {
    //   const data = {
    //     created_by_id:1,
    //     updated_by_id: 1
    //   };
    //   const result = await strapi.entityService.create("api::order-detail.order-detail", {
    //     data,
    //   });
    //   console.log("result", result);
    // }

    //orders to details
    // const count = 1;
    // for (let index = 0; index < count; index++) {
    //   const data = {
    //     order_id:1,
    //     order_detail_id: 77
    //   };
    //   const result = await strapi.entityService.create("api::order-details-order-links.order-details-order-links", {
    //     data,
    //   });
    //   console.log("result", result);
    // }

    console.log("=========== creating data done ==========");
  },
};
