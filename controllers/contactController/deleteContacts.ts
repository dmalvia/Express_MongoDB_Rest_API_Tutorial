const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import * as contactService from"../../services/contactService"
import { IJwtPayload } from '../../interfaces/IJWTPayload';
import mongoose from 'mongoose';



/**
*@desc Delete All Contacts
*@route DELETE /api/contacts/
*@access public
*/

export const deleteContacts = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {
        /* #swagger.tags = ['Contact']
            #swagger.summary = 'delete all contacts' 
            #swagger.description = 'Endpoint to delete all contacts' 
            #swagger.security = [{
              "apiKeyAuth": []
    }] */
  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
    const contacts = await contactService.removeAll(req)
    .then(()=>{
      res.status(200).json({ message: `deleted all contacts of user id : ${req.user.id}` });

    });
    console.log(JSON.stringify(contacts,null,3))    
    res.status(200).json(contacts);
  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});




