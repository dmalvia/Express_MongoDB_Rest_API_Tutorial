const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import * as contactService from"../../services/contactService"
import { IJwtPayload } from '../../interfaces/IJWTPayload';


/**
*@desc Get All Contacts
*@route GET /api/contacts/get
*@access public
*/

export const getContacts = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {
          /* #swagger.tags = ['Contact']
             #swagger.summary = 'get all contacts' 
             #swagger.description = 'Endpoint to get all contacts' 
             #swagger.security = [{
              "apiKeyAuth": []
    }] */

  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
    const contacts = await contactService.getAll(req);
    console.log(JSON.stringify(contacts,null,3))    
    res.status(200).json(contacts);
  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});



