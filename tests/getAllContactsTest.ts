import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const getAllContactsTest = () => {

  test('get all contacts', async () => {

    let initUser = localStorage.getItem("user");       

    const user = JSON.parse(initUser as string)

    //get token from user

    const {token} = user

    const res = await request(BASE_URL).get(`/api/contacts/`).set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res.body.length).toEqual(4)

 
  },60000)


  
}



















