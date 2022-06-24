import { Request, Response } from 'express';
import processThumb from '../processing/processThumb';

// call "createThumb" process
const createThumb = async (req: Request, res: Response, next: () => void) => {
  // create thumb
  const success = await processThumb(
    <string>req.imagePath,
    <string>req.thumbPath,
    parseInt(<string>req.query.w),
    parseInt(<string>req.query.h),
  );
  if (success) {
    req.thumbExist = true;
  } else {
    req.thumbExist = false;
  }
  next();
};

export default createThumb;
