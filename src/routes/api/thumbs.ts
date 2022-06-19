import express from 'express';
import { promises } from 'fs';
import path from 'path';
import checkThumb from '../../middleware/checkThumb';

const thumbs = express.Router();

// use middleware to check if the thumb is already exist
thumbs.use(checkThumb);

// serve original images (no processing) form images folder
thumbs.get('/', async (req, res) => {
  console.log('middleware did not find the thumb');
  const file = req.query.file;
  const filePath = path.join(__dirname, '../../../thumbs/') + file;
  try {
    // check if file is accessible
    const fileExisits = await promises.access(filePath);

    //send the file if it's accessible
    res.sendFile(filePath);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default thumbs;
