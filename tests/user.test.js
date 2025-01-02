import User from '../models/userModel';

describe('User Model', () => {
  it('should hash the password before saving', async () => {
    const user = new User({
      name: 'Test',
      email: 'test@test.com',
      password: '123456',
    });
    await user.save();
    expect(user.password).not.toBe('123456');
  });
});
