import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const deleteAllContactsTest = () => {

  test('delete all contacts', async () => {

    let initUser = localStorage.getItem("user");       

    const user = JSON.parse(initUser as string)

    //get token from user

    const {token} = user

    const res = await request(BASE_URL).delete(`/api/contacts/`).set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)

    localStorage.removeItem("contacts")
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();

 
  },60000)


  
}



















