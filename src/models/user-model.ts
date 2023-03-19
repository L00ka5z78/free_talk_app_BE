import mongoose from 'mongoose';
import { authenticationService } from '../common';
import {
  IUserDoc,
  IUserModel,
  ICreateUserDto,
} from '../interfaces/user-interface';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});
userSchema.pre('save', async function (done) {
  if (this.isModified('password') || this.isNew) {
    const hashedPassword = authenticationService.hashPassword(
      this.get('password')
    );
    this.set('password', hashedPassword);
  }
  done();
});
userSchema.statics.build = (createUserDto: ICreateUserDto) => {
  return new User(createUserDto);
};

export const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema);
