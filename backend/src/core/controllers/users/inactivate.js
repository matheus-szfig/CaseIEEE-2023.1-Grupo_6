import { request, response } from "express";
import { inactivateUserService } from "../../service/users/inactivate";

export default async function InactivateUser(req = request, res = response) {
  const deleteId = req.params.id;

  const deleteService = await inactivateUserService(deleteId);

  if (deleteService.status === true) {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  }

  res.json(deleteService);
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
