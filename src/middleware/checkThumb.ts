import { Request, Response } from 'express';
import path from 'path';
import fileExists from '../helpers/fileExists';

// check if file already in thumbs folder
const checkThumb = async (req: Request, res: Response, next: () => void) => {
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

  const thumbFile = `${thumbArray[0]}_${width}_${height}.${thumbArray[1]}`;
  const thumbPath = path.join(__dirname, '../../thumbs/') + thumbFile;
  const exists = await fileExists(thumbPath);
  if (exists) {
    //send the file if it's accessible
    res.sendFile(thumbPath);
  } else {
    //coninue to route handler
    next();
  }
};

export default checkThumb;
