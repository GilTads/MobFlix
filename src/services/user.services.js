import Parse from 'parse/node';
import config from '../../config.json';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

Parse.initialize(config.appId, config.javascriptKey, config.masterKey);
Parse.serverURL = config.serverURL;
const User = Parse.Object.extend('Auth');

export default {
  async signup(email, password) {
    const query = new Parse.Query('Auth');

    if (query.equalTo('email', email)) {
      throw new Error('User already exists!');
    }

    password = await bcrypt.hash(password, 8);

    const user = new User();

    return user.save({
      email,
      password,
    });
  },

  async auth(email, password) {
    const query = new Parse.Query('Auth');

    query.equalTo('email', email);
    const result = await query.find();

    if (result.length < 1) {
      throw new Error('User not found!');
    }

    const user = result[0];
    const userPassword = user.get('password');

    const isPasswordMatch = bcrypt.compareSync(password, userPassword);

    if (!isPasswordMatch) {
      throw new Error('Inválid Credentials!');
    }

    return user;
  },

  async generateAuthToken(user) {
    return jwt.sign({ id: user.objectId }, config.JWT_KEY);
  },
};
