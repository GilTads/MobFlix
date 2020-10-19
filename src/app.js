import express from 'express';
import routes from './routes';

import ParseServerAPI from './parse-server';

const app = express();

app.use(express.json());
app.use('/parse', ParseServerAPI);
app.use(routes);

export default app;
