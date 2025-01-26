import {  test } from '@jest/globals';
const request = require('supertest');
const {BASE_URL}  = require("../constants")

export const deactivateUserTest = () => {

  
  test('delete user', async () => {
    let mock = localStorage.getItem("user")
   
    let mockObj = JSON.parse(mock as string)
    const res = await request(BASE_URL).delete('/api/users/deactivate').send(mockObj);
  
   console.log("data retrieved from test == ",JSON.stringify(res.body), typeof res.body)
   if(res.statusCode ===200){
      localStorage.removeItem("user")
   }
    expect(res.statusCode).toEqual(200);
  
   
  },30000)
  
}



















