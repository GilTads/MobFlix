import Parse from 'parse/node';
import config from '../../config.json';

Parse.initialize(config.appId, config.javascriptKey, config.masterKey);
Parse.serverURL = config.serverURL;

export default {
  async create(movieData, moviePoster) {
    const data = Array.from(Buffer.from(moviePoster.buffer, 'binary'));
    const file = new Parse.File('poster', data, moviePoster.mimetype);
    const poster = (await file.save()).url();

    const { title, description, releaseDate } = movieData;
    const Movie = Parse.Object.extend('Movie');
    const movie = new Movie();
    return movie.save({
      title,
      description,
      releaseDate,
      poster,
    });
  },
  index() {
    const query = new Parse.Query('Movie');
    return query.find();
  },
  show(queries) {
    const { title, releaseDate } = queries;
    const query = new Parse.Query('Movie');
    if (title) {
      query.equalTo('title', title);
    }
    if (releaseDate) {
      query.equalTo('releaseDate', releaseDate);
    }
    return query.find();
  },
};
