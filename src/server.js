import { ParseServer } from 'parse-server';
import http from 'http';
import config from '../config.json';
import app from './app';

const port = config.PORT;

const httpServer = http
  .createServer(app)
  .listen(port, () => console.log(`Mobflix running on port ${port}`));

const parseLiveQueryserver = ParseServer.createLiveQueryServer(httpServer);
