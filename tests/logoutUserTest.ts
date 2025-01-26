import {  test } from '@jest/globals';
const request = require('supertest');
const {BASE_URL}  = require("../constants")


export const logoutUserTest = () => {
  
test('logout user', async () => {
 
  let mock = localStorage.getItem("user")
  console.log("mock in getmockdata ===== finally  retrieved,", mock)
  let mockObj = JSON.parse(mock as string)
  const token  = mockObj.token as string
  const res = await request(BASE_URL).post('/api/users/logout').send({token: token}).set('Authorization', `Bearer ${token}`) ;

 console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
 if(token){
  let updatedUser = {...mockObj, token : ""}
  localStorage.setItem("user",JSON.stringify(updatedUser,null,2))

 }
  expect(res.statusCode).toEqual(200);
  expect(res.body).toBeDefined();
 
},60000)

  
}



















