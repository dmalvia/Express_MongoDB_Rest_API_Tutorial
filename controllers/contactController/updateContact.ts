
const asyncHandler = require("express-async-handler");
import { Response } from 'express';
import { IJwtPayload } from "../../interfaces/IJWTPayload";
import * as contactService from "../../services/contactService"
import mongoose from "mongoose";
import { IContactUpdateRequest } from "../../interfaces/IContactUpdateRequest";
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import { IContact } from '../../interfaces/IContact';
import { IContactCreateRequest } from '../../interfaces/IContactCreateRequest';

/**
*@desc Update  Contact
*@route PUT /api/contacts/:id
*@access private
*/

export const updateContact = asyncHandler(async (req: IContactUpdateRequest, res : Response) => {
          /* #swagger.tags = ['Contact']
             #swagger.summary = 'update a contact' 
            #swagger.description = 'Endpoint to update a contact' 
            #swagger.security = [{
              "apiKeyAuth": []
    }] */
try{
  const {email, name, phone, fax} = req.body
  console.log(email,name, phone,fax)
  const user_id : mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.user.id)
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

  if(!email && !name && !phone && !fax){
    errorBroadcaster(res,400,"at least one field is mandatory!")    
  }

      await contactService.getById(objectId)
      .then(async (contact)=>{
        if(!contact){
          res.status(400).json("contact does not exist");
        }   

        if(contact?.user_id?.toString()  != user_id.toString()){
          res.status(400);
          throw new Error(`user id: ${user_id} not authorized to update contact `);
        }
        else{
          console.log("strings are the same")
          if(email){
          let contactFound = await contactService.getByEmail(email as string)

            if( contactFound ){
              res.status(400);
              throw new Error(`Email ${email} already taken`);
            }        
          }
          //create new Contact update those that changed         
          
          const newContact : IContact ={
              email: email? email : contact.email ,
              name : name?  name : contact.name ,
              phone : phone?  phone : contact.phone ,
              fax:fax?  fax : contact.fax
          }
 
           await contactService.update(objectId,newContact)
           const updatedContact = await contactService.getById(objectId);
          res.status(200).json(updatedContact);

          
        }
    
      })


    
  

    }catch(e){
      console.log(e)
    }
});
