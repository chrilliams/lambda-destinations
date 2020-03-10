'use strict';
const superagent = require('superagent');

module.exports.hello = async (event, context, callback) => {
  console.log(event)
  console.log(context)
  await event.Records.forEach(async record => {
    const { body } = record;
    console.log(body);


  });
  // const res = await superagent.post('/api/pet');
  // console.log(res);

  callback(new Error("Failure from event, Success = false, I am failing!"), 'Destination Function Error Thrown');

};
