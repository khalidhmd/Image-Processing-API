import sharp from 'sharp';

const processThumb = async (
  imagePath: string,
  thumbPath: string,
  width: number,
  height: number,
) => {
  try {
    await sharp(imagePath).resize(width, height).toFile(thumbPath);
    return true;
  } catch (error) {
    return false;
  }
};

export default processThumb;
