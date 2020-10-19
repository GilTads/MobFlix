import jwt from 'jsonwebtoken';

import config from '../../config.json';

const auth = async (request, response, next) => {
  try {
    const token = request.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, config.JWT_KEY);
    if (!data) {
      throw new Error('Invalid Token');
    }

    request.token = data._id;

    next();
  } catch (error) {
    response.status(412).json({ message: 'Invalid Credentials' });
  }
};

export default auth;
