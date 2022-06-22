import express from 'express';
import checkImage from '../../middleware/checkImage';

const images = express.Router();
images.use(checkImage);

// serve original images (no processing) from images folder
images.get('/', async (req, res) => {
  //send the file if it's accessible
  res.sendFile(<string>req.imagePath);
});

export default images;
