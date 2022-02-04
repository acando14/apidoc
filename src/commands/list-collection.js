#!/usr/bin/env node

const collection = require('../collection');
const [,, ...args] = process.argv;
const apiKey = process.env.POSTMAN_APIKEY;

if (args[0] === undefined) {
  console.error("The workspace id must be defined");
  process.exit(1);
}

collection.getWorkspace(apiKey, args[0]).then(
  (workspace) => {
    workspace.collections.forEach(
      collection =>  {
        console.log(`* ${collection.name} => ${collection.id}`);
      });
  });
