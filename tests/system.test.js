import request from 'supertest';
import app from '../index';

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'Test User',
      email: 'testuser@test.com',
      password: '123456',
    });
    expect(res.statusCode).toBe(201);
  });

  it('should return all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
