
const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IAuth } from '../../interfaces/IAuth';
import Auth from '../../models/authModel';


/**
*@desc retrieve token Auth
*@route GET /api/auths/get
*@access public
*/

export const getAuth = asyncHandler(async (req : Request<{},{},IAuth>, res : Response) => {

  const credentials = req.body;
  try{
    let auth = await Auth.findOne({token : credentials.token});
    res.json(auth);
  }catch(e){
    console.log(e);
}
});






