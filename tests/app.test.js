const request = require('supertest');
     const { app, server } = require('../src/app');

     describe('GET /', () => {
       it('should return Hello, World!', async () => {
         const response = await request(app).get('/');
         expect(response.status).toBe(200);
         expect(response.text).toBe('Hello, World!');
       });

       it('should handle mock service integration', async () => {
         const mockResponse = await request('http://mock-service:8080').get('/');
         expect(mockResponse.status).toBe(200);
         expect(mockResponse.text).toBe('Mock Service Response');
       });

       afterAll((done) => {
         server.close(done);
       });
     });
