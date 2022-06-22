import { Request, Response } from 'express';
import sharp from 'sharp';

// serve files form thumbs folder
const createThumb = async (req: Request, res: Response, next: () => void) => {
  // create thumb
  try {
    await sharp(req.imagePath)
      .resize(parseInt(<string>req.query.w), parseInt(<string>req.query.h))
      .toFile(<string>req.thumbPath);
    req.thumbExist = true;
  } catch (error) {
    req.thumbExist = false;
  }
  next();
};

export default createThumb;
