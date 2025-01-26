
import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from "../interfaces/IUser";

const userSchema : Schema = new Schema<IUser>({

  username: {
    type: String,
    required: [true, "Please add the user name"],
  },
  email: {
    type: String,
    required: [true, "Please add the user email address"],
    unique: [true, "Email address already taken"],
  },
  password: {
    type: String,
    required: [true, "Please add the user password"],
  },
},
  {
    timestamps: true,
  });


  const User: Model<IUser>  = mongoose.model<IUser>("User", userSchema);

export default User;

