import supertest from 'supertest';
import request from 'supertest';
import { app } from '../../../app';

// /** what is being tested: route /api/post/new */
// describe('post create post route', () => {
//   // test
//   describe('If user is NOT logged in', () => {
//     it('should return 403', async () => {
//       const res = await request(app).get('/api/post/new');

//       const { statusCode } = await supertest(app).post('/api/post/new');
//       expect(statusCode).toBe(403);
//     });
//   });
// });

it('should return currentUser property', async () => {
  const cookie = await global.signin();

  const res = await request(app)
    .get('/current-user')
    .set('Cookie', cookie)
    .send()
    .expect(201);

  expect(res.body.currentUser.email).toEqual('email@email.com');
});
