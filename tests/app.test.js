const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
  it('GET /health should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });

  it('GET /api/info should return project info', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.project).toBe('CI/CD Pipeline Demo');
  });

  it('GET /api/greet/:name should greet by name', async () => {
    const res = await request(app).get('/api/greet/Shreya');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain('Shreya');
  });

  it('GET /unknown-route should return 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toBe(404);
  });
});