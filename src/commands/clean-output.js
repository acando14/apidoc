#!/usr/bin/env node
const fsPromises = require('fs').promises;

fsPromises.rmdir(`${process.cwd()}/apidoc`, { recursive: true }).then(
  _ => {
    fsPromises.mkdir(`${process.cwd()}/apidoc`);
  }
).catch(
  e => console.error(e)
)
