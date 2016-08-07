export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  let log = server.createList('log');
  server.createList('sensor', 20, {log});


  let sensor = server.createList('sensor');
  server.createList('log', 10, { sensor });
}
