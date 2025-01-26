import {  test } from '@jest/globals';
const request = require('supertest');
const {BASE_URL}  = require("../constants")


export const currentUserTest = () => {
  
test('current user', async () => {
 
  let mock = localStorage.getItem("user")
  console.log("mock in getmockdata ===== finally  retrieved,", mock)
   let mockObj = JSON.parse(mock as string)
   const {token} = mockObj
  const res = await request(BASE_URL).get('/api/users/current').set('Authorization', `Bearer ${token}`)

 console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
 let user = res.body

  expect(token).toBeDefined();
  expect(user).toBeDefined();
 
},10000)

  
}



















