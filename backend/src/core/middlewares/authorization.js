import { request, response } from "express";

export default function Authorize(permissionlist, {type, key}="") {

  return (req = request, res = response, next) => {

    try{
      const allow = userInfo.permissions.reduce((acc, v) => {
        return acc || permissionlist.includes(v);
      }, false);
 
      const exist = !!type && !!key ? req[type][key] == userInfo[key] : true

      if(!allow && exist){
        throw { status:403, message:"User does not have rights" }
      }

      next();

    }catch(e){
      return res.status(e.status).send({status:false, message:e.message})
    }

  }

}

// req.token = {
//     UserInfo:{
//         id,
//         nome,
//         email,
//         permission:[
//             '[descricao da permissao]'
//         ],
//         cargos:[
//             {
//                 equipe:'[nome da equipe]',
//                 cargo:'[cargo]'
//             }
//         ]
//     }
// }