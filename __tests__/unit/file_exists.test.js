import fileExists from '../../src/helpers/fileExists';
import path from 'path';

describe('File exist helper method:', function () {
  it('returns true if called on existing file', async function () {
    const exists = await fileExists(
      path.join(__dirname, '../../images/', 'fjord.jpg'),
    );

    expect(exists).toBeTruthy();
  });
});
