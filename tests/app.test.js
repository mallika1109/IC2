const request = require('supertest');
const { app, server } = require('../src/app');

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  // Close the server after all tests
  afterAll((done) => {
    server.close(done);
  });
});
