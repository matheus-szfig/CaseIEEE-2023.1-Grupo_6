import { request, response } from "express";
import { deleteUserService } from "../../service/users/delete";

export default async function DeleteUser(req = request, res = response) {
	const deleteId = req.params.id;

	if (!req.token?.UserInfo) {
		res.status(401).send("Token is missing!");
		return;
	}

	const { id = 0, permission = [] } = req.token.UserInfo;

	if (!permission.includes("admin") && !id === deleteId) {
		if (!req.token.UserInfo) {
			res.status(403).send("User does not have permission!");
			return;
		}
	}

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
