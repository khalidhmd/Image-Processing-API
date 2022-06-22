declare namespace Express {
  export interface Request {
    imagePath?: string;
    thumbPath?: string;
    thumbSizeError?: boolean;
    thumbExist?: boolean;
  }
}
