
import mongoose, { Schema, Model} from 'mongoose';
import { IAuth } from "../interfaces/IAuth";

const authSchema : Schema = new Schema<IAuth>({

  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: false,
  },

},
  {
    timestamps: true,
  });


  const Auth : Model<IAuth>  = mongoose.model<IAuth>("Auth", authSchema);

export default Auth
