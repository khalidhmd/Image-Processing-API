import express from 'express';
import images from './api/images';
import thumbs from './api/thumbs';

const routes = express.Router();

//this route is used to check, from client app, that the server is running and accessible
routes.get('/', (req, res) => {
  res.json('connected...');
});

//original images route
routes.use('/images', images);

//custom thumbs route
routes.use('/thumbs', thumbs);

export default routes;
