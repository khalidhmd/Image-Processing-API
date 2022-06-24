import { Request, Response } from 'express';
import processThumb from '../processing/processThumb';

// serve files form thumbs folder
const createThumb = async (req: Request, res: Response, next: () => void) => {
  // create thumb
  const exists = await processThumb(
    <string>req.imagePath,
    <string>req.thumbPath,
    parseInt(<string>req.query.w),
    parseInt(<string>req.query.h),
  );
  if (exists) {
    req.thumbExist = true;
  } else {
    req.thumbExist = false;
  }
  next();
};

export default createThumb;
