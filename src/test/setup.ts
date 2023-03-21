import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import config from '../config/config';

declare global {
  var signin: () => Promise<string[]>;
}

let mongo: any;

beforeAll(async () => {
  config.jsonWebToken.JWT_KEY = 'testENVIORENENMENTtestingKEY';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  //creating mongo server
  mongo = await MongoMemoryServer.create();
  let mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = async () => {
  const res = await request(app)
    .post('/signin')
    .send({
      email: 'email@email.com',
      password: '123456',
    })
    .expect(201);

  const cookie = res.get('Set-Cookie');

  return cookie;
};
