import axios from 'axios'
import type { AxiosInstance } from 'axios'

const baseURL = process.env.BASE_URL;

const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"       
}

const api : AxiosInstance =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api===null?"yes ":"no");

export default api

