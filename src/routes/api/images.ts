import express from 'express';
import fs from 'fs';
import path from 'path';

const images = express.Router();

// serve original images (no processing) form images folder
images.get('/', (req, res) => {
  const file = req.query.file;
  res.sendFile(path.join(__dirname, '../../../images/') + file);
});

export default images;
