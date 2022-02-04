const axios = require('axios').default;
const fsPromises = require('fs').promises;
const fs = require('fs');

const createCollectionFile = async (commandPath, apikey, collectionUid) => {
  let responseCollection = await axios.get(`https://api.getpostman.com/collections/${collectionUid}`, {
    params: {
      apikey
    }
  });

  const collection = responseCollection.data.collection;
  let collectionName = collection.info.name;
  let groupFolder = `${commandPath}/apidoc/${collectionName}`;

  if (!fs.existsSync(groupFolder)) {
    await fsPromises.mkdir(groupFolder);
  }

  const rawCollectionJson = JSON.stringify(responseCollection.data);

  await fsPromises.writeFile(`${groupFolder}/${collectionName}.json`, rawCollectionJson, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
  return responseCollection.data.collection;
}


const getWorkspace = async (apikey, workspaceId) => {
  let workspace = await axios.get(`https://api.getpostman.com/workspaces/${workspaceId}`, {
    params: {
      apikey
    }
  });
  return workspace.data.workspace;
}


exports.createCollectionFile = createCollectionFile;
exports.getWorkspace = getWorkspace;
