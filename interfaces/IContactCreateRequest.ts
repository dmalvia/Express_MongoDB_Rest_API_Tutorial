import mongoose from "mongoose";
import { IJwtPayload } from "./IJWTPayload";
export interface IContactCreateRequest extends IJwtPayload{
    
  id : mongoose.Types.ObjectId  
  email: string
  name : string
  phone : string
  fax?:string

}
