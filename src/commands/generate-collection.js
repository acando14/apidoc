#!/usr/bin/env node
const collectionLib = require('../collection');
const openApiLib = require('../openapi');
const apiKey = process.env.POSTMAN_APIKEY;
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const {createDirFolder, deleteFileInFolder} = require("../fileMgr");
const argv = yargs(hideBin(process.argv)).argv
let buildOpenApi = true;

if (argv.collection === undefined) {
  console.error("The colleciton id must be defined");
  process.exit(1);
}

if (argv["postman-only"] === 'false') {
  console.log("Generating only the PostmanCollection");
  buildOpenApi = false;
}

const options =  {
  path: argv.path || process.cwd(),
  name: argv.name
};


createDirFolder(options.path);
deleteFileInFolder(options.path);

/**
 * options for create-collection-file:
 * {
 *    path: <string>
 *    name: <string>|<undefined>
 * }
 */
collectionLib.createCollectionFile(apiKey, argv.collection, options).then(
  collection => {
    if (buildOpenApi) {
      openApiLib.createOpenApiFile(collection, options);
    }
  });
