import request from 'supertest';
import { server } from '../../src/index';
import assert from 'assert';

describe('"/api" route', function () {
  it('send a text response: "connected..."', function (done) {
    request(server)
      .get('/api')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response.body, 'connected...');
        done();
      })
      .catch((err) => {
        done(err);
      })
      .finally(() => server.close());
    // .end(function (err, res) {
    //   if (err) return done(err);
    //   server.close();
    //   return done();
    // });
  });
});

describe('"/api/thumb?w=&h=" route', function () {
  it('send a text response: "connected..."', function (done) {
    request(server)
      .get('/api')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response.body, 'connected...');
        done();
      })
      .catch((err) => {
        done(err);
      })
      .finally(() => server.close());
    // .end(function (err, res) {
    //   if (err) return done(err);
    //   server.close();
    //   return done();
    // });
  });
});
