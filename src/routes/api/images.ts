import express from 'express';
import { promises } from 'fs';
import path from 'path';

const images = express.Router();

// serve original images (no processing) form images folder
images.get('/', async (req, res) => {
  const file = req.query.file;
  const filePath = path.join(__dirname, '../../../images/') + file;
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

export default images;
