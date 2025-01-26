import mongoose, { Schema, Model } from 'mongoose';
import { IContact } from '../interfaces/IContact';

const contactSchema : Schema = new Schema<IContact>({

  user_id: {
     type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: "User",
  },
  email: {
    type: String,
    required: [true, "Please add the user email address"],
    unique: [true, "Email address already taken"],
  },
  name: {
    type: String,
    required: [true, "Please add your name"],
  },
  phone: {
    type: String,
    required: [true, "Please add your phone"],
  },
  fax: {
    type: String,
    required: false,
  },
},
  // {
  //   timestamps: true,
  // }
);


  const Contact: Model<IContact>  = mongoose.model<IContact>("Contact", contactSchema);

export default Contact;

