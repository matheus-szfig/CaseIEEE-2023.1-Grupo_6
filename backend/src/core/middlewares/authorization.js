import { request, response } from "express";

export default function Authorize(permissionlist) {

  return (req = request, res = response, next) => {

    try{
      const userInfo = req.token?.UserInfo;

      if (!userInfo) {
        throw { status:401, message:"Token is missing" };
      }
      
      const allow = userInfo.permission.reduce((acc, v) => {
        return acc || permissionlist.includes(v);
      }, false);

      if(!allow){
        throw { status:403, message:"User does not have rights" }
      }

      next();

    }catch(e){
      res.status(e.status).send(e.message)
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