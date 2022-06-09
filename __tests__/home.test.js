import request from 'supertest';
import { server } from '../src/index';

describe('A suite', function () {
  it('contains spec with an expectation', function (done) {
    request(server)
      .get('/api/')
      .expect('Content-Type', /text/)
      .expect('Content-Length', 'connected...'.length.toString())
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        server.close();
        return done();
      });
  });
});
