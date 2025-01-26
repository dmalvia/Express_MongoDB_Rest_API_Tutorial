export const getEndpoint = (path : string, id : string = "")=>{

    const route : string = path + `${id}`
    console.log(route)
    return route 
}