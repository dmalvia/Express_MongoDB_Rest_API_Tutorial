const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IAuth } from '../../interfaces/IAuth';
import Auth from '../../models/authModel';

/**
*@desc Delete Auth Token
*@route POST /api/auths/delete
*@access private
*/

export const deleteAuth  = asyncHandler(async (req : Request<{},{},IAuth>, res : Response) => {

    const auth = req.body;
    try{
      await Auth.deleteOne({id : auth.id});
      res.json({ message: `deleted user auth with id = ${auth.id}`});
    }catch(e){
      console.log(e);
  }
  });



