const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IUserAuthorized } from "../../interfaces/IUserAuthorized";
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import * as authService from "../../services/authService"
/**
*@desc Logout a user
*@route POST /api/users/logout
*@access public
*/


export const logoutUser = asyncHandler(async (req: Request, res : Response) => {
   
  const {token} :IUserAuthorized = req.body
  if(!token){ 
    errorBroadcaster(res,400,"field token is mandatory");
} 
const authenticatedUser = await authService.getByToken(token)
if(!authenticatedUser){
  res.json({ message: "Already logged out" });
}
//remove auth from Auth Collection
authService.remove(token);
res.json({ message: "logout the user" });
});




