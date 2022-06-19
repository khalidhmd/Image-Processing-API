import express from 'express';
import images from './api/images';
import thumbs from './api/thumbs';

const routes = express.Router();

//this route is used to check that the server is running and accessible from client app
routes.get('/', (req, res) => {
  res.send('connected...');
});

//original images route
routes.use('/images', images);

//custom thumbs route
routes.use('/thumbs', thumbs);

export default routes;
