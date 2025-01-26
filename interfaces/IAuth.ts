import mongoose from "mongoose"

export interface IAuth {
    token? : string
    id : mongoose.Types.ObjectId

}


