const postmanToOpenApi = require("postman-to-openapi");

const createOpenApiFile = async (commandPath, collection) => {
  const options = {
    auth: {
      oAuth2: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'A resource owner JWT',
        description: 'OAuth2 JWT token'
      },
    },
    servers: [
      {
        url: 'https://api.preprod.decathlon.net',
        description: 'PreProduction environment server'
      },
      {
        url: 'https://api.preprod.decathlon.net',
        description: 'Production environment server'
      }
    ]
  }
  let collectionName = collection.info.name;
  let groupFolder = `${commandPath}/apidoc/${collectionName}`;
  const rawCollectionJson = JSON.stringify(collection);
  const out = `${groupFolder}/${collectionName}.openapi.yaml`;
  await postmanToOpenApi(rawCollectionJson, out, options);
}

exports.createOpenApiFile = createOpenApiFile;
