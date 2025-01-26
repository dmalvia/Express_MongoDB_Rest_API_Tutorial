import { AxiosResponse } from "axios";
import api from "../configs/axios";
import { getHeader} from "./getHeader";
import { getUrl } from "./getUrl";

export class APIMethods{
   
    static async get(path : string, token: string, id : string = "") : Promise<AxiosResponse<any, any>>{
        return await api.get(getUrl(path, id), 
            {
              headers: getHeader(token)
            }
        )
       

    }
    static async put(path : string, token: string,data : any, id : string) : Promise<AxiosResponse<any, any>>{

        console.log("update auth from api manager.........................................")

        return await api.put(getUrl(path, id), data,
            {
              headers: getHeader(token)
            }
        )

    }
    static async post(path: string, token : string , data : Object) : Promise<AxiosResponse<any, any>>{

        console.log("add auth from api manager.........................................")
        return await api.post(getUrl(path),data,
            {
              headers:getHeader(token)
            }
        )
    }
    static async delete(path : string, token: string, id : string="") : Promise<AxiosResponse<any, any>>{
        console.log("delete from api manager.........................................")

        return await api.delete(getUrl(path, id),
            {
              headers : getHeader(token),
            }
        )

    }
}

/**
 * 
 * 
 
    static  async addAuth(authData : Object, token : string) : Promise<AxiosResponse<any, any>>{
        console.log("add auth from api manager.........................................")
        return await api.post(process.env.BASE_URL+"/api/auths/add",authData,
            {
              headers:{
                Authorization : `Bearer ${token}`
              }
            }
        )
    }
 */