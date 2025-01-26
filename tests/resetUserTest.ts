import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../utils/fileReader";
const {BASE_URL}  = require("../constants")


export const resetUserTest = () => {

  test('reset user password', async () => {

    let initUser = localStorage.getItem("user");       

    const user = JSON.parse(initUser as string)

    //get token from user

    const {token, email, old_password, new_password} = user

    const res = await request(BASE_URL).post(`/api/users/reset`)
                      .send({email : email, old_password : old_password, new_password: new_password})
                      .set('Authorization', `Bearer ${token}`)  

   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   if(res.statusCode < 300){
    let updatedUser = {...user, password : user.new_password, old_password : "" }
    localStorage.setItem("user", JSON.stringify(updatedUser, null , 2))
 
   }
  
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
 
  },60000)
  
}



















