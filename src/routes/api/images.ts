import express from 'express';
// import { promises } from 'fs';
import path from 'path';
import fileExists from '../../helpers/fileExists';
const images = express.Router();

// serve original images (no processing) form images folder
images.get('/', async (req, res) => {
  const file = req.query.file;
  const filePath = path.join(__dirname, '../../../images/') + file;
  const exists = await fileExists(filePath);
  if (exists) {
    //send the file if it's accessible
    res.sendFile(filePath);
  } else {
    res.status(200).send('file does not exist');
  }
});

export default images;
