const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import * as contactService from "../../services/contactService"
import mongoose from "mongoose";

/**
*@desc Delete a contact
*@route DELETE /api/contacts/:id
*@access public
*/

export const deleteContact = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {
         /* #swagger.tags = ['Contact']
            #swagger.summary = 'delete a contact' 
            #swagger.description = 'Endpoint to delete a contact' 
            #swagger.security = [{
              "apiKeyAuth": []
    }] */

  const stringId =  req.params.id;
  if(stringId.length !== 24){
    res.status(400);
    throw new Error("id must be 24 characters");
  }
  if(!mongoose.isValidObjectId(stringId)){
    res.status(400);
    throw new Error("id is not valid");
  }
  const objectId: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(stringId);

   await contactService.getById(objectId)
  .then((contact)=>{
    if(!contact){
      res.status(200).json("contact does not exist");
    }
    else{
    contactService.remove(contact._id)
    res.status(200).json(`deleted contact with id: ${objectId}`);
    }

  })
  .catch((e)=>{
    res.status(400);
    throw new Error(e);

  })
});

