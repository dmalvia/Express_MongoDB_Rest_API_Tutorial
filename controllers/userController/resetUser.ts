/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 18-JAN-2025
 *
 */

const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IUserReset } from "../../interfaces/IUserReset";
import * as userService from "../../services/userService"
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import * as bcrypt from "bcrypt"
import { isValidEmail, isValidPassword } from '../../utils/inputValidation';

/**
*@desc Reset a user
*@route PUT /api/users/reset
*@access public
*/

export const resetUser = asyncHandler(async (req: Request, res : Response) => {
   /**
  *
  @swagger.tags = ['User']
   */
  const { email, new_password, old_password } : IUserReset = req.body;
    console.log(email,new_password,old_password)
    if (!email || !new_password ||!old_password) {
      res.status(400);
      throw new Error("All fields are mandatory!");

    }
    if(!isValidEmail(email as string)){
      errorBroadcaster(res,400,"not a  valid email")
  
    }
    if(!isValidPassword(new_password as string)){
      errorBroadcaster(res,400,"not a new password")
    }  

        const user  = await userService.getByEmail(email as string);
  if (!user) {
    errorBroadcaster(res,400,`Invalid Email ${email}`);
  }else{
    if(!(await bcrypt.compare(old_password,user.password as string))){
      errorBroadcaster(res,400,`Invalid password`);
    }else{
      const hashedPassword : string = await bcrypt.hash(new_password , parseInt(process.env.SALT_ROUNDS as string));
      console.log("Hashed Password: ", hashedPassword);
      await userService.update(user._id, hashedPassword)
      res.json({ message: "updated user password" });
    }

  }
  res.json({ message: "logout the user" });
});




