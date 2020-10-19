import { Router } from 'express';
import MovieRouter from './controllers/movie/router';
import UserRouter from './controllers/user/router';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Mobflix no ar!' });
});

routes.use('/movie', MovieRouter);
routes.use('/user', UserRouter);

export default routes;
