import { Request, Response } from 'express';
import path from 'path';
import fileExists from '../helpers/fileExists';

// check if file already in thumbs folder
const checkThumb = async (
  req: Request,
  res: Response,
  next: () => void,
): Promise<void> => {
  const file = <string>req.query.file;
  const thumbArray = file.split('.');
  const width = req.query.w;
  const height = req.query.h;
  const w = parseInt(<string>width);
  const h = parseInt(<string>height);

  // check that width and height are in correct format
  if (isNaN(h) || isNaN(w)) {
    // send the response if the width/height values are not valid numiric values
    res.json({ error: 'Error: width or height is in bad format' });
  }

  const thumbFile = `${thumbArray[0]}_${width}_${height}.${thumbArray[1]}`;
  const thumbPath = path.join(__dirname, '../../thumbs/') + thumbFile;
  const exists = await fileExists(thumbPath);
  req.thumbPath = thumbPath;
  if (exists) {
    // send the thumb file if it's already exist
    res.sendFile(req.thumbPath);
    return;
  }
  // pass onto the next middleware if the thumb files does not exist and the request is valid
  next();
};

export default checkThumb;
