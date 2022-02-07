const postmanToOpenApi = require("postman-to-openapi");

const createOpenApiFile = async (collection, options) => {
  const postmanToOpenApiConfig = {
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

  let collectionName = options.name || collection.info.name;
  const rawCollectionJson = JSON.stringify(collection);

  const out =   `${options.path}/${collectionName}.openapi.yaml`;
  await postmanToOpenApi(rawCollectionJson, out, postmanToOpenApiConfig);
}

exports.createOpenApiFile = createOpenApiFile;
