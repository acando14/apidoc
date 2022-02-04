#!/usr/bin/env node

const collectionLib = require('../collection');
const openApiLib = require('../openapi');
const currentPath = process.cwd();
const [,, ...args] = process.argv;
const apiKey = process.env.POSTMAN_APIKEY;
let buildOpenApi = true;

if (args[0] === undefined) {
  console.error("The colleciton id must be defined");
  process.exit(1);
}

if (args[1] === 'false') {
  console.log("generating only the PostmanCollection");
  buildOpenApi = false;
}

collectionLib.createCollectionFile(currentPath, apiKey, args[0]).then(
  collection => {
    if (buildOpenApi) {
      openApiLib.createOpenApiFile(currentPath, collection);
    }
  });
