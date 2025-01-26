import { Response, NextFunction } from "express";
import {jwtDecode} from 'jwt-decode';
const asyncHandler = require("express-async-handler");
import * as jwt from"jsonwebtoken";
import { IJwtPayload } from "../interfaces/IJWTPayload";
import isJwtTokenExpired, { decode } from 'jwt-check-expiry';


const validateToken = asyncHandler(async (req : IJwtPayload, res: Response, next: NextFunction) => {

  let token;
  let authHeader = req.headers.authorization as string;
  console.log("authheader ==========", authHeader)
  
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(401);
    throw new Error("User not authorized or token missing");
  }
  else{

    token = authHeader.split(" ")[1];  
    console.log('isExpired is:', isJwtTokenExpired(token));
    if(isJwtTokenExpired(token)){
      res.status(401);
      throw new Error("token has expired");
    }

    const decoded =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as jwt.Secret)
    
    console.log("decoded ==========", decoded)
    console.log('Decoded token :', decode(token));

    const decodedPayload =  jwtDecode<IJwtPayload>(token);

    const {user}  = decodedPayload

    if(decoded ){
      req.user = user
      next();    


    }else{
      res.status(401);
      throw new Error("User not authorized!");
    }

  }
});

module.exports = validateToken;



