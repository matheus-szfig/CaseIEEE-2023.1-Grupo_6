
import { database } from "../../../config/database";

export async function deleteUserService(id) {
	try {
		const user = await database("usuario").select("*").where({id, ativo:1});
        
		if (user.length === 0) {
			throw new Error("User not find!");
		}

		const userDeleted = await database("usuario").update({ativo: 0}).where({ id });
		return {
			status: true,
			message: "User deleted!",
		};
	} catch (error) {
        console.log(error);
		return {
			status: false,
			message:error['message'],
		};
	}
}
