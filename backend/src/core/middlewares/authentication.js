import { request, response } from "express";
import AuthToken from "../service/users/auth";
import { decode, verify } from "jsonwebtoken";

export default async function Authenticate(req = request, res = response, next) {
  try{
    let cookie = req.cookies['access_token'] || '';

    console.log(cookie);
    cookie = verify(cookie, process.env.JWT_KEY || "");
    console.log('\n',cookie);

    const {token, error} = await AuthToken(cookie)

    if(error){
      throw error;
    }

    req.cookies['access_token'] = token;

    next();
  }catch(e){
    res.status(401).send({status:false, message:'Invalid or missing token'});
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