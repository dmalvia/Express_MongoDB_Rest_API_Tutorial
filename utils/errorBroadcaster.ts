import { Response } from "express";

export const errorBroadcaster = (res: Response,code: number, message: string )=>{

    res.status(code);
    throw new Error(message);

}

