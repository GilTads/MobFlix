import { ParseServer } from 'parse-server';
import config from '../config.json';

const parseServerAPI = new ParseServer({
  databaseURI: config.databaseURI,
  // cloud: `${__dirname}/cloud/main.js`,
  appId: config.appId,
  masterKey: config.masterKey,
  serverURL: config.serverURL,
  liveQuery: ['Movie', 'Auth'],
});

export default parseServerAPI;
