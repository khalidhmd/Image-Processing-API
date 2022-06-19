import { Request, Response } from 'express';
import path from 'path';
import fileExists from '../helpers/fileExists';

// check if file already in thumbs folder
const checkThumb = async (req: Request, res: Response, next: () => void) => {
  const file = req.query.file;
  const filePath = path.join(__dirname, '../../../thumbs/') + file;
  const exists = await fileExists(filePath);
  if (exists) {
    //send the file if it's accessible
    res.sendFile(filePath);
  } else {
    //coninue to route handler
    next();
  }
};

export default checkThumb;
