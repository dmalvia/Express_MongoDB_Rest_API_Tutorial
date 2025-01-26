import {  test } from '@jest/globals';
const request = require('supertest');
const {BASE_URL}  = require("../constants")


export const loginUserTest = () => {
  
test('login user', async () => {
 
  let mock = localStorage.getItem("user")
  console.log("mock in getmockdata ===== finally  retrieved,", mock)
  let mockObj = JSON.parse(mock as string)
  const res = await request(BASE_URL).post('/api/users/login').send({password: mockObj.password, email : mockObj.email});

 console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
 const {accessToken : token} = res.body
 if(token){
  let updatedUser = {...mockObj, token : token}
  localStorage.setItem("user",JSON.stringify(updatedUser,null,2))

 }
  expect(token).toBeDefined();
 
},60000)

  
}



















