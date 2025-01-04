import User from '../models/userModel';
import app from '../index';
import mongoose from 'mongoose';
import request from 'supertest';

describe('User Model', () => {
  it('should return user details if the user exists', async () => {
    const user = await User.create({
      name: 'Paloma20',
      email: 'paloma20@test.com',
      password: '123456',
    });
  
    const res = await request(app).get(`/api/users/${user._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Paloma20');
  });

  it('should hash the password before saving', async () => {
    const user = new User({
      name: 'Paloma21',
      email: 'paloma21@test.com',
      password: '123456',
    });
    await user.save();
    expect(user.password).not.toBe('123456');
  }, 15000);

  it('should update an existing user', async () => {
    const user = await User.create({
      name: 'Paloma22',
      email: 'paloma22@test.com',
      password: '123456',
    });
  
    const res = await request(app)
      .put(`/api/users/${user._id}`)
      .send({ name: 'Paloma10' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Paloma10');
  });
  
  it('should return 404 if the user does not exist', async () => {
    const res = await request(app).put('/api/users/invalidUserId').send({
      name: 'Paloma1',
    });
    expect(res.statusCode).toBe(404);
  });

  it('should delete a user', async () => {
    const user = await User.create({
      name: 'Paloma25',
      email: 'paloma25@test.com',
      password: '123456',
    });
  
    const res = await request(app).delete(`/api/users/${user._id}`);
    expect(res.statusCode).toBe(204);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
