const request = require('supertest');
const app = require('@server/index');

describe('Server Routes', () => {
  it('should serve the index page on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<!DOCTYPE html>');
  });

  it('should serve static files from the /dist directory', async () => {
    const res = await request(app).get('/dist/bundle.js').redirects(1);
    expect(res.statusCode).toBe(200);
  });
});
