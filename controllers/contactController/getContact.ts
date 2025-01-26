const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import * as contactService from "../../services/contactService"
import mongoose from "mongoose";

/**
*@desc Get  Contacts
*@route GET /api/contacts/get
*@access public
*/

export const getContact = asyncHandler(async (req : IJwtPayload, res: Response)  =>  {
          /* #swagger.tags = ['Contact']
             #swagger.summary = 'get a contact' 
            #swagger.description = 'Endpoint to retrieve a contact' 
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
    res.status(200).json(contact);

  })
  .catch((e)=>{
    res.status(400);
    throw new Error(e);

  })


});





