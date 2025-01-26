const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IContact } from "../../interfaces/IContact";
import * as contactService from"../../services/contactService"
import { IContactCreateRequest } from "../../interfaces/IContactCreateRequest";
import { errorBroadcaster } from '../../utils/errorBroadcaster';


/**
*@desc Add Auth Token
*@route POST /api/contact/create
*@access public
*/

export const createContact = asyncHandler(async (req: IContactCreateRequest, res : Response)  => {

  const { name, email, phone, fax } = req.body;
if(req){
  console.log("user data === ",name,email,phone)

 if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  else{
    //create new contact user
    
    const contact : IContact = {
      name: name,
      email : email,
      phone:phone,
      fax:fax,
      user_id:  req?.user?.id  as any
    }

    //check database if email is already taken
   const registeredUser = await contactService.getByEmail(email)
   if(registeredUser){
    res.status(400);
    throw new Error("Email already taken!");
   }else{
    await contactService.create(contact)
    .then((newContact)=>{
      console.log("new contact : ",newContact,typeof newContact)

      res.status(201).json(newContact);
    })   
    .catch((e)=>{
      errorBroadcaster(res,400,`Error:\n ${e}`)

    }) 
   }
  }

}


});






