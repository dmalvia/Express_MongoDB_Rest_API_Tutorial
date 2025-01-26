import mongoose from "mongoose";
import User from "../models/userModel";


async function getByEmail(email : string) {
  return User.findOne({ email : email });
}

async function getByUsername(username : string) {
  return User.findOne({ username : username });
}

async function create(username: string,email : string, password: string) {
  return  User.create({
    username: username,
    email: email,
    password: password
  });
}

async function remove(_id :  mongoose.Types.ObjectId) {
  return User.findByIdAndDelete(_id);
}

async function update(_id :  mongoose.Types.ObjectId, new_password : string) {
  return User.findOneAndUpdate({ _id: _id }, {$set: {password: new_password}},{upsert: true});
}

export { getByEmail, getByUsername, create, remove ,update };
