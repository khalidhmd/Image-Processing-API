import path from 'path';
import processThumb from '../../src/processing/processThumb';

describe('Process thumb function:', function () {
  it('returns true if called on existing image file', async function () {
    const success = await processThumb(
      path.join(__dirname, '../../images/', 'fjord.jpg'),
      path.join(__dirname, '../../thumbs/', 'fjord_200_200.jpg'),
      200,
      200,
    );
    expect(success).toBeTruthy();
  });
  it('returns false if called on non-existing image file', async function () {
    const success = await processThumb(
      path.join(__dirname, '../../images/', 'fjordxxx.jpg'),
      path.join(__dirname, '../../thumbs/', 'fjordxxx_200_200.jpg'),
      200,
      200,
    );
    expect(success).toBeFalsy();
  });
});
