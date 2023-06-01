import { request, response } from "express";
import { deleteUserService } from "../../service/users/delete";

export default async function DeleteUser(req = request, res = response) {
	const deleteId = req.params.id;

	const deleteService = await deleteUserService(deleteId);
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
