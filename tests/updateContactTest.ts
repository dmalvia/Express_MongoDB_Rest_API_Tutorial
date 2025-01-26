import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
import { mock } from 'node:test';
const {BASE_URL}  = require("../constants")


export const updatedContactTest = () => {

  test('update contact information', async () => {

    let mock = {email: "gotham@gmail.com",phone:"9876512304"}
    let initUser = localStorage.getItem("user"); 
    let initContacts = localStorage.getItem("contacts");    
      
    const user = JSON.parse(initUser as string);
    const contacts = JSON.parse(initContacts as string)
    const contact = contacts[0]
    console.log("contact from json:",contact)
    const {_id} = contact;

    //get token from user
    const {token} = user

    const res = await request(BASE_URL).put(`/api/contacts/${_id}`)
                      .send({email : mock.email, phone : mock.phone})
                      .set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   if(res.statusCode < 300){
    let updatedContact = {...contact, email : mock.email, phone : mock.phone }
    contacts[0] = updatedContact
    localStorage.setItem("contacts", JSON.stringify(contacts, null , 2))
 
   }
  
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
 
  },60000)
  
}



















