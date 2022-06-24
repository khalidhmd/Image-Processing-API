declare namespace Express {
  // add custom properties to the request object
  export interface Request {
    imagePath?: string;
    thumbPath?: string;
    thumbSizeError?: boolean;
    thumbExist?: boolean;
  }
}
