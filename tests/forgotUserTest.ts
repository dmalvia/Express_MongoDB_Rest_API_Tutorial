import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const forgotUserTest = () => {

  test('forgot user password of contact', async () => {

    let initUser = localStorage.getItem("user");       

    const user = JSON.parse(initUser as string)

    //get token from user

    const {token, email} = user

    const res = await request(BASE_URL).post(`/api/users/forgot`).send({email : email}).set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   const {password} = res.body
   let updatedUser = {...user, password : password, old_password : password }
   localStorage.setItem("user", JSON.stringify(updatedUser, null , 2))

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
 
  },60000)
  
}



















