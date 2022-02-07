#!/usr/bin/env node
const collection = require('../collection');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv
const apiKey = process.env.POSTMAN_APIKEY;

if (argv.workspace === undefined) {
  console.error("The workspace id must be defined");
  process.exit(1);
}

collection.getWorkspace(apiKey, argv.workspace).then(
  (workspace) => {
    workspace.collections.forEach(
      collection =>  {
        console.log(`* ${collection.name} => ${collection.id}`);
      });
  });
