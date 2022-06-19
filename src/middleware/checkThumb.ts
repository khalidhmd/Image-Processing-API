import { Request, Response } from 'express';
import { promises } from 'fs';
import path from 'path';

// serve original images (no processing) form images folder
const checkThumb = async (req: Request, res: Response, next: Function) => {
  const file = req.query.file;
  const filePath = path.join(__dirname, '../../../thumbs/') + file;
  try {
    // check if file is accessible
    await promises.access(filePath);

    //send the file if it's accessible
    res.sendFile(filePath);
  } catch (error: any) {
    //coninue to route handler
    next();
  }
};

export default checkThumb;
