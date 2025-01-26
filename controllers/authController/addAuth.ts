const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IAuth } from '../../interfaces/IAuth';
import * as authService from "../../services/authService"

/**
*@desc Add Auth Token
*@route POST /api/auths/add
*@access private
*/
export const addAuth = asyncHandler(async (req : Request<{},{},IAuth>, res : Response) => {

  const auth = req.body;
  try{
    await authService.create(auth);
    res.json({ message: "add the auth token", data: JSON.stringify(auth) });
  }catch(e){
    console.log(e);
}
});



