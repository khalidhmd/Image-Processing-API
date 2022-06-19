import { promises } from 'fs';

const fileExists = async (filePath: string) => {
  try {
    // check if file is accessible
    await promises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

export default fileExists;
