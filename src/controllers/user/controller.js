import UserService from '../../services/user.services';

export default {
  async signup(request, response) {
    const { email, password } = request.body;

    try {
      const user = await UserService.signup(email, password);
      response.status(201).json(user);
    } catch (error) {
      response.status(412).json(error.message);
    }
  },

  async auth(request, response) {
    const { email, password } = request.body;

    try {
      const auth = await UserService.auth(email, password);
      const token = await UserService.generateAuthToken(auth);
      response.status(200).json(token);
    } catch (error) {
      response.status(412).json(error.message);
    }
  },
};
