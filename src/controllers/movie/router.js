import express from 'express';
import controller from './controller';
import multer from 'multer';

import auth from '../../middlewares/auth';

const upload = multer();

export default express
  .Router()
  .get('/', auth, controller.index)
  .get('/show', auth, controller.show)
  .post('/create', auth, upload.single('poster'), controller.create);
