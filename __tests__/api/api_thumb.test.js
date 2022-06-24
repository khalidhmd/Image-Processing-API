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
        expect(response.body).toBe('Error: image does not exist.');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
