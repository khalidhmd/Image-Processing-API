import express from 'express';
import checkImage from '../../middleware/checkImage';
import checkThumb from '../../middleware/checkThumb';
import createThumb from '../../middleware/createThumb';
const thumbs = express.Router();

// use middleware
thumbs.use(checkImage);
thumbs.use(checkThumb);
thumbs.use(createThumb);

// serve thumb file
thumbs.get('/', async (req, res) => {
  res.sendFile(<string>req.thumbPath);
});

export default thumbs;
