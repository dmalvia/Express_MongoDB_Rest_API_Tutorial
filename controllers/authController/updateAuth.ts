const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IAuth } from '../../interfaces/IAuth';
import * as authService from "../../services/authService"


/**
*@desc Update Token Auth
*@route PUT /api/auths/update
*@access private
*/

 export const updateAuth = asyncHandler(async (req : Request<{},{},IAuth>, res : Response) => {

  const auth = req.body;
  try{
    await authService.update(auth);
    res.json({ message: `updated auth token of user id = ${auth.id}`});
  }catch(e){
    console.log(e);
  }
});



