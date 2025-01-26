/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 18-JAN-2025
 *
 */

const asyncHandler = require("express-async-handler");
import * as bcrypt from "bcrypt";
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';
import * as  jwt from "jsonwebtoken";
import { IAuth } from "../../interfaces/IAuth";
import * as userService from"../../services/userService"
import * as authService from"../../services/authService"
import { APIManager } from "../../api/APIManager";
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import { isValidEmail, isValidPassword } from "../../utils/inputValidation";


/**
*@desc Login user
*@route POST /api/users/login
*@access public
*/


export const loginUser = asyncHandler(async (req : Request, res: Response)  => {
 // #swagger.tags = ['User'] // Tag this route with 'Users'
    // #swagger.summary = 'Get all users'
    
  const { email, password } : IUser = req.body;
  console.log(email,password)
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  if(!isValidEmail(email as string)){
    errorBroadcaster(res,400,"not a  valid email")

  }
  if(!isValidPassword(password as string)){
    errorBroadcaster(res,400,"not a valid password")
  }  
  const user  = await userService.getByEmail(email as string);
    
    //compare password with hashedpassword 
  if (user &&  await bcrypt.compare(password,user.password as string)) {

    let payload = {
      user: {
        username: user.username as string , email: user.email as string , id: user._id ,
      },
    }
    //post fix operator   knowing value cant be undefined
    let secretKey  = process.env.ACCESS_TOKEN_SECRET! ;
    const accessToken  =  jwt.sign( payload,secretKey as jwt.Secret,  { expiresIn: "30m" } );
    //add token and id to auth 
    const authData : IAuth = {
      id : user._id,
      token : accessToken
    }

    const authenticatedUser = await authService.getById(user._id);
    if(!authenticatedUser){
      await APIManager.addAuth(authData, accessToken);
    }else{
      await APIManager.updateAuth(authData,accessToken);     
    }
      res.status(200).json({ accessToken }); 
  }else{ 
    res.status(400).json({ message: "email or password is not valid" });
  }

});
  




