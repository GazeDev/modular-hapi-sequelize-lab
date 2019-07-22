const { expect } = require('@hapi/code');
const Lab = require('@hapi/lab');
const lab = exports.lab = Lab.script();

lab.experiment('User', () => {
  let server;
  // let sequelize;
  let userModels;
  let userId = '';

  lab.before(async() => {
    userModels = require('./user.models');
    const index = await require('../../index.js');
    server = await index.server;
    // sequelize = await index.sequelize;
    // console.log('test sequelize');
    // console.log('sequelize in test', sequelize);
  });

  lab.test('Truth', async () => {
    // wait for the response and the request to finish
    expect(true).to.equal(true);
  });


  // lab.test('Pretest: GET /users Empty', async () => {
  //   // wait for the response and the request to finish
  //   const response = await server.inject({
  //     method: 'GET',
  //     url: '/users'
  //   });
  //   const payload = JSON.parse(response.payload)
  //   expect(payload).to.equal([]);
  // });
  //
  //
  // lab.test('POST /users', async () => {
  //   // wait for the response and the request to finish
  //   const response = await server.inject({
  //     method: 'POST',
  //     url: '/users',
  //     payload: {
  //       'username': 'First Last',
  //     }
  //   });
  //
  //   const payload = JSON.parse(response.payload);
  //   // These are sequelize fields that we don't need to worry about
  //   delete payload.createdAt;
  //   delete payload.updatedAt;
  //
  //   expect(payload.username).to.equal('First Last');
  //   // save the userId for later so we can clean up
  //   userId = payload.id;
  //
  //   expect(payload).to.include({
  //     // TODO: define payload expected schema
  //   });
  // });
  //
  //
  // lab.test('DELETEs /user/{userId}', async () => {
  //
  //   // wait for the response and the request to finish
  //   const response = await server.inject({
  //     method: 'DELETE',
  //     url: '/users/' + userId
  //   });
  //
  //   const payload = JSON.parse(response.payload);
  //   // one row should have been affected
  //   expect(payload).to.equal(1);
  //   expect(response.statusCode).to.equal(202);
  // });
  //
  //
  // lab.test('Posttest: GET /users Empty', async () => {
  //   // wait for the response and the request to finish
  //   const response = await server.inject({
  //     method: 'GET',
  //     url: '/users'
  //   });
  //   const payload = JSON.parse(response.payload)
  //   expect(payload).to.equal([]);
  // });

});
