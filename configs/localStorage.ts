import { LocalStorage } from "node-localstorage";



export const initializeLocalStorage = (path : string)=>{
if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    const localStorage : LocalStorage = new LocalStorage(path);    
    return localStorage;
    
  }
}

