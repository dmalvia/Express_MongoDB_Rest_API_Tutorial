import mongoose from "mongoose";
import { Request } from "express";

export interface IJwtPayload extends Request {
  user:{
    username:string;
    email:string
    id:mongoose.Types.ObjectId

  }
  
}