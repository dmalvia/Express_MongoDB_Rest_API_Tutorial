const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IUserDeactivated } from "../../interfaces/IUserDeacitivated";
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import * as userService from "../../services/userService"
import * as authService from "../../services/authService"
import * as bcrypt from "bcrypt"
import { APIManager } from '../../api/APIManager';
import { isValidEmail, isValidPassword } from '../../utils/inputValidation';

/**
*@desc Deactivate a user
*@route POST /api/users/deactivate
*@access public
*/

export const deactivateUser = asyncHandler(async (req: Request, res : Response) => {

  const { email, password, confirm}: IUserDeactivated = req.body
  if (!email || !password || confirm == undefined) {
    console.log(email,password,confirm)

    errorBroadcaster(res,400,"All fields are mandatory!");
  }
  if(!isValidEmail(email as string)){
    errorBroadcaster(res,400,"not a  valid email")

  }
  if(!isValidPassword(password as string)){
    errorBroadcaster(res,400,"not a valid password")
  }  
  if(confirm!== true){
    errorBroadcaster(res,400,"confirm must be true");

  }
  const registeredUser = await userService.getByEmail(email);
  if(!registeredUser){
    errorBroadcaster(res,400,"Email does not exist");

  }

  if(!(await bcrypt.compare(password,registeredUser?.password as string))) {
    errorBroadcaster(res,400,"Invalid password");

  }

  const authenticatedUser = await authService.getById(registeredUser!._id)
  if(authenticatedUser){
    await APIManager.removeAuth(authenticatedUser,authenticatedUser.token as string);
  }
   let success = await userService.remove(registeredUser!._id)
  res.json({ message: success });
});




