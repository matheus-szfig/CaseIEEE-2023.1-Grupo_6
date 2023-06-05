import { request, response } from "express";

export default async function AuthUser(req = request, res = response) {
	res.json({status:true, data: req.cookies['access_token']});
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
