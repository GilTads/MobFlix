import MovieService from '../../services/movie.services';

export default {
  async create(request, response) {
    try {
      const movie = MovieService.create(request.body, request.file);

      response.status(201).json(movie);
    } catch (error) {
      response.status(412).json(error.message);
    }
  },
  async index(request, response) {
    try {
      const movies = await MovieService.index();
      response.status(200).json(movies);
    } catch (error) {
      response.status(412).json(error);
    }
  },
  async show(request, response) {
    const queries = request.query;
    try {
      const movies = await MovieService.show(queries);
      response.status(200).json(movies);
    } catch (error) {
      response.status(412).json(error);
    }
  },
};
