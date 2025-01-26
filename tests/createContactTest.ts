import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
import { IContact } from '../interfaces/IContact';
const {BASE_URL}  = require("../constants")


export const createContactTest = () => {

  test('create a new contact', async () => {

    console.log(__dirname)
    let path  : string = __dirname + "\\mocks\\client.json"
    let initContact = fileReader(path)
    console.log("init contact ========================",initContact,typeof initContact)
    localStorage.setItem("contacts",initContact);      
    const contacts: IContact[] = JSON.parse(initContact as string)
    console.log("contacts === ", contacts)

    const contact1 = contacts[0]
    const contact2 = contacts[1]
    const contact3 = contacts[2]
    const contact4 = contacts[3]


    let userMock = localStorage.getItem("user");
    let user = JSON.parse(userMock as string)

    //get token from user
    const {token} = user
    const res1 = await request(BASE_URL).post('/api/contacts').send(contact1).set('Authorization', `Bearer ${token}`)  
    const res2 = await request(BASE_URL).post('/api/contacts').send(contact2).set('Authorization', `Bearer ${token}`)  
    const res3 = await request(BASE_URL).post('/api/contacts').send(contact3).set('Authorization', `Bearer ${token}`)  
    const res4 = await request(BASE_URL).post('/api/contacts').send(contact4).set('Authorization', `Bearer ${token}`)  



   console.log("data retrieved from test == ",JSON.stringify(res1.body), typeof res1.body)
   console.log("data retrieved from test == ",JSON.stringify(res2.body), typeof res2.body)
   console.log("data retrieved from test == ",JSON.stringify(res3.body), typeof res3.body)
   console.log("data retrieved from test == ",JSON.stringify(res4.body), typeof res4.body)

   if(res1.statusCode < 300 && res2.statusCode < 300 && res3.statusCode < 300 && res4.statusCode < 300 ){
    let contactsArray = [];
    contactsArray.push({... contact1, ...res1.body} )
    contactsArray.push({... contact2, ...res2.body} )
    contactsArray.push({... contact3, ...res3.body} )
    contactsArray.push({... contact4, ...res4.body} )

    console.log("contacts array ========================",contactsArray,typeof contactsArray)

    
    localStorage.setItem("contacts",JSON.stringify(contactsArray, null, 2))

   }

    expect(res1.statusCode).toEqual(201);
    expect(res1.body).toBeDefined();
    expect(res2.statusCode).toEqual(201);
    expect(res2.body).toBeDefined();
    expect(res3.statusCode).toEqual(201);
    expect(res3.body).toBeDefined();
    expect(res4.statusCode).toEqual(201);
    expect(res4.body).toBeDefined();

 
  },30000)


  
}



















