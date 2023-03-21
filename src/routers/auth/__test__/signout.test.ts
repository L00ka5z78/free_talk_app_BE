import request from 'supertest';
import { app } from '../../../app';

it('returns 200 on successfull logout', async () => {
  return request(app).get('/signout').expect(200);
});
