const request = require("supertest");

describe("A suite", function () {
  let server;
  beforeAll(async () => {
    const mod = await import("../../build/index.js");
    server = mod.server;
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    }
  });
  it("contains spec with an expectation", function () {
    request(server)
      .get("/api")
      // .expect("Content-Type", /json/)
      // .expect("Content-Length", "15")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
