import { getEndpoint } from "./getEnpoint";

export const getUrl = (path : string, id : string = "")=>{
    const BASE_URL =  process.env.BASE_URL;
    const url = BASE_URL + getEndpoint(path,id)
    return url;
  
}