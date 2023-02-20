import request from 'supertest';
import app from '../src/app';

describe('Get detail user /user/:idUser', () => {
  test('should return 200 and user detail', async () => {
    const response = await request(app).get('/user/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('idUser');
  });
});