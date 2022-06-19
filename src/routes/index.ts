import express from 'express';
import images from './api/images';
import thumbs from './api/thumbs';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('connected...');
});

routes.use('/images', images);
routes.use('/thumbs', thumbs);

export default routes;
