import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const registerUserTest = () => {

  test('registers user Tesing in isolation', async () => {

    console.log(__dirname)
    let path  : string = __dirname + "\\mocks\\user.json"
    let initUser = fileReader(path)
    console.log("init user ========================",initUser)
    localStorage.setItem("user",initUser);      

    let mock = localStorage.getItem("user");
    let mockObj = JSON.parse(mock as string)
    const res = await request(BASE_URL).post('/api/users/register').send(mockObj)    

   console.log("data retrieved from test == ",JSON.stringify(res.body))
   if(res.statusCode ===201){
    let updatedCreds = {...mockObj,... res.body,password : mockObj.password}   
    localStorage.setItem("user",JSON.stringify(updatedCreds, null, 2))

   }

    expect(res.statusCode).toEqual(201);
 
  },30000)


  
}



















