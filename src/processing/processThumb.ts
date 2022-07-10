import sharp from 'sharp';

// simply resize the images and save the result to thumb folder
const processThumb = async (
  imagePath: string,
  thumbPath: string,
  width: number,
  height: number,
): Promise<boolean> => {
  try {
    await sharp(imagePath).resize(width, height).toFile(thumbPath);
    return true;
  } catch (error) {
    return false;
  }
};

export default processThumb;
