import mongoose from "mongoose"

export interface IContact  {
    user_id?: mongoose.Types.ObjectId;
    email: string;
    name : string
    phone : string
    fax?:string

}
