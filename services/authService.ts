import mongoose from "mongoose";
import Auth from "../models/authModel";
import { IAuth } from "../interfaces/IAuth";

async function getById(id : mongoose.Types.ObjectId) {
    return Auth.findOne({ id : id });
  }
async function getByToken(token : string) {
  return Auth.findOne({ token : token });
}

async function create(auth : IAuth) {
  return  Auth.create(auth);
}

async function update(auth : IAuth) {
    return Auth.updateOne({ id : auth.id}, // Filter
                          {$set: {token : auth.token }}, // Update
                          {upsert: true});
}

async function remove(token : string) {
  return Auth.findOneAndDelete({ token : token });
}

export { getById, getByToken, create, update, remove };

