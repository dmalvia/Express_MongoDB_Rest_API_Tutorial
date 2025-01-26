import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const deleteContactTest = () => {

  test('delete a contact', async () => {

    let initContacts = localStorage.getItem("contacts");   
    let initUser = localStorage.getItem("user");      
   
    console.log("contacts ========================",initContacts,typeof initContacts)
    const contacts : any[] = JSON.parse(initContacts as string)
    const user = JSON.parse(initUser as string)

    const contact = contacts[0]
    console.log("contact for test ===",contact)
    const { _id} = contact
    const {token} = user

    //get token from user
    const res = await request(BASE_URL).delete(`/api/contacts/${_id}`).set('Authorization', `Bearer ${token}`)
    
    const res2 = await request(BASE_URL).get(`/api/contacts/`).set('Authorization', `Bearer ${token}`)  
 

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
 
   const updatedContacts = contacts.slice(1);
   localStorage.setItem("contacts",JSON.stringify(updatedContacts,null,2))

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res2.body.length).toEqual(3);

 
  },60000)


  
}



















