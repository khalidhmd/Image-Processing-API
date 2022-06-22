import { Request, Response } from 'express';
import path from 'path';
import fileExists from '../helpers/fileExists';

// check if file already in thumbs folder
const checkThumb = async (req: Request, res: Response, next: () => void) => {
  const file = <string>req.query.file;
  const thumbArray = file.split('.');
  const width = req.query.w || 'a';
  const height = req.query.h || 'a';
  const w = parseInt(<string>width);
  const h = parseInt(<string>height);

  // check that width and height are in correct format
  if (isNaN(h) || isNaN(w)) {
    res.send('Error: width or height is in bad format');
  }

  const thumbFile = `${thumbArray[0]}_${width}_${height}.${thumbArray[1]}`;
  const thumbPath = path.join(__dirname, '../../thumbs/') + thumbFile;
  const exists = await fileExists(thumbPath);
  req.thumbPath = thumbPath;
  if (exists) {
    return res.sendFile(req.thumbPath);
  }
  next();
};

export default checkThumb;
