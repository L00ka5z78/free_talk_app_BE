import request from 'supertest';
import { app } from '../../../app';

it('returns 201 on successfull signup', async () => {
  // jest.setTimeout(600000)

  return request(app)
    .post('/signup')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(201);
});

it('sets cookie after successfull signup', async () => {
  const res = await request(app)
    .post('/signup')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(201);
  expect(res.get('Set-Cookie')).toBeDefined();
});
