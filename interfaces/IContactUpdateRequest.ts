import { IJwtPayload } from "./IJWTPayload";
export interface IContactUpdateRequest extends IJwtPayload{
    
  email?: string
  name? : string
  phone? : string
  fax?:string
  

}
