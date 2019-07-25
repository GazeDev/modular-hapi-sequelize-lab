const { expect } = require('@hapi/code');
const Lab = require('@hapi/lab');
const lab = exports.lab = Lab.script();

lab.experiment('User', () => {
  let server;
  let sequelize;
  let userModels;
  let userId = '';

  lab.before(async() => {
    userModels = require('./user.models');
    const index = await require('../../index.js');
    server = await index.server;
    sequelize = await index.sequelize;
  });

  lab.test('Truth', async () => {
    // wait for the response and the request to finish
    expect(true).to.equal(true);
  });

  lab.test('Failure', async () => {
    // wait for the response and the request to finish
    expect(false).to.equal(true);
  });


  lab.test('Pretest: GET /users Empty', async () => {
    // wait for the response and the request to finish
    const response = await server.inject({
      method: 'GET',
      url: '/users'
    });
    const payload = JSON.parse(response.payload)
    expect(payload).to.equal([]);
  });


  lab.test('POST /users', async () => {
    let postedPayload = {
      'username': 'First Last',
    };
    // wait for the response and the request to finish
    const response = await server.inject({
      method: 'POST',
      url: '/users',
      payload: postedPayload,
    });

    const payload = JSON.parse(response.payload);

    expect(payload).to.include(postedPayload);

    // save the userId for later so we can clean up
    userId = payload.id;

  });
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
