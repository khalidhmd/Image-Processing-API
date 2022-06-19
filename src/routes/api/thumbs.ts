import express from 'express';
import checkThumb from '../../middleware/checkThumb';
import createThumb from '../../middleware/createThumb';
const thumbs = express.Router();

// use middleware to check if the thumb is already exist
thumbs.use(checkThumb);
thumbs.use(createThumb);

// serve original images (no processing) form images folder
thumbs.get('/', async (req, res) => {
  console.log('middleware did not find the thumb');
  res.send('An error occured during thumb generation. Please try again.');
});

export default thumbs;
