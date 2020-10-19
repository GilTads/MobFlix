import express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/signup', controller.signup)
  .post('/auth', controller.auth);
