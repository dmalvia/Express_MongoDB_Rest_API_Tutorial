import mongoose from "mongoose";
import Contact from "../models/contactModel";
import { IContact } from "../interfaces/IContact";
import { IJwtPayload } from "../interfaces/IJWTPayload";

async function getById(id : mongoose.Types.ObjectId) {
    return Contact.findOne({ _id : id });
  }
  async function getAll(req : IJwtPayload) {
    return Contact.find({ user_id : req.user.id });
  }
async function getByToken(token : string) {
  return Contact.findOne({ token : token });
}

async function getByEmail(email : string) {
  return Contact.findOne({ email : email });
}

async function create(contact : IContact) {
  return  Contact.create(contact);
}

async function update(id : mongoose.Types.ObjectId,contact : IContact) {
    return Contact.findOneAndUpdate({_id : id}, // Filter
                          {$set: {...contact}}, // Update
                          {upsert: true});
}

//{_id: "12"}, {$set: {protocol: "http"}}, {upsert: true}
async function remove(id : mongoose.Types.ObjectId) {
  return Contact.findOneAndDelete({ _id : id });
}

async function removeAll(req : IJwtPayload) {
  return Contact.deleteMany({ user_id : req.user.id });
}

export { getById, getByToken, getByEmail, create, update, remove, removeAll, getAll };

