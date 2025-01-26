import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const getContactTest = () => {

  test('get a contact', async () => {

    let initContacts = localStorage.getItem("contacts");   
    let initUser = localStorage.getItem("user");   
   
    console.log("init contact ========================",initContacts,typeof initContacts)
    const contacts : any[] =  JSON.parse(initContacts as string)
    const user = JSON.parse(initUser as string)

    const contact = contacts[0];
    const { _id} = contact
    const {token} = user

    //get token from user
    const res = await request(BASE_URL).get(`/api/contacts/${_id}`).set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   if(res.statusCode < 300){
    let updatedCreds = {... contact, ...res.body}   
    console.log("updated creds ========================",updatedCreds,typeof updatedCreds)
    
   }

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
 
  },60000)


  
}



















