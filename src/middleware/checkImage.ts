import { Request, Response } from 'express';
import path from 'path';
import fileExists from '../helpers/fileExists';

// check if file already in images folder
const checkImage = async (
  req: Request,
  res: Response,
  next: () => void,
): Promise<void> => {
  const file = req.query.file;
  const filePath = path.join(__dirname, '../../images/') + file;
  const exists = await fileExists(filePath);
  if (exists) {
    //send the file if it's accessible
    req.imagePath = filePath;
  } else {
    // send the response if the file is not accessible
    res.json({ error: 'Error: image does not exist.' });
    return;
  }
  // pass onto the next middleware if the file is accessible
  next();
};

export default checkImage;
