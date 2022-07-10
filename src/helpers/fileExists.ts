import { promises } from 'fs';

// returns 'true' if the file is accessible, or 'false' if otherwise.
const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    // check if file is accessible
    await promises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

export default fileExists;
