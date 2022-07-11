import request from 'supertest';
import app from '../../src/app';

describe('"/api/images" route', function () {
  it('respond with success (200) is image file exists', function (done) {
    request(app)
      .get('/api/thumbs/?file=fjord.jpg&w=200&h=200')
      .expect(200)
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  it('respond with Error message "Error: image does not exist." is image file does not exists', function (done) {
    request(app)
      .get('/api/images/?file=fjordxxx.jpg&w=200&h=200')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body.error).toBe('Error: image does not exist.');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('respond with Error message "Error: width or height is in bad format" if width or height are not in correct format', function (done) {
    request(app)
      .get('/api/thumbs/?file=fjord.jpg&w=xx&h=xx')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.body.error).toBe(
          'Error: width or height is in bad format',
        );
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
