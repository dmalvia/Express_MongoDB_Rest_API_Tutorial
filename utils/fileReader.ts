


import * as fs from 'fs';

export const fileReader = (path : string) =>  {

    var data = fs.readFileSync(path,'utf8');

    return data

}