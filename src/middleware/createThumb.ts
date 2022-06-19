import { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';

// serve files form thumbs folder
const createThumb = async (req: Request, res: Response, next: () => void) => {
  const file = <string>req.query.file;
  const thumbArray = file.split('.');
  const width = <string>req.query.w;
  const height = <string>req.query.h;
  const w = parseInt(width);
  const h = parseInt(height);

  // check if width and height are in correct format
  if (typeof h !== 'number' || typeof w !== 'number') {
    res.status(200).send('bad width or height values');
    return;
  }

  // generate thumb file name based on width and height
  const thumbFile = `${thumbArray[0]}_${width}_${height}.${thumbArray[1]}`;
  const filePath = path.join(__dirname, '../../images/') + file;
  const thumbPath = path.join(__dirname, '../../thumbs/') + thumbFile;
  try {
    await sharp(filePath).resize(w, h).toFile(thumbPath);
    res.sendFile(thumbPath);
  } catch (error) {
    next();
  }
};

export default createThumb;
