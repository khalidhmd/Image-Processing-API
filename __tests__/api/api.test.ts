import request from 'supertest';
import app from '../../src/app';

describe('"/api" route', function () {
  it('send a text response: "connected..."', function (done) {
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((response) => {
        expect(response.body.message).toBe('connected...');
        done();
      })
      .catch((err) => {
        done(err);
      });
    // .finally(() => server.close());
    // .end(function (err, res) {
    //   if (err) return done(err);
    //   server.close();
    //   return done();
    // });
  });
});
