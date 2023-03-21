import request from 'supertest';
import { app } from '../../../app';

it('returns 201 on successfull signin', async () => {
  return request(app)
    .post('/signin')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(200);
});

it('sets cookie after successfull signup', async () => {
  const res = await request(app)
    .post('/signin')
    .send({
      email: 'test@test.com',
      password: '123456',
    })
    .expect(200);
  expect(res.get('Set-Cookie')).toBeDefined();
});
