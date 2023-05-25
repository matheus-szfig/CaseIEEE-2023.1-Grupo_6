
import { database } from "../../../../config/database";

export async function deleteUserService(id) {
	try {
		const user = await database("usuario").select("*").where({id});
        
		if (user.length === 0) {
			throw new Error("User not find!");
		}

		const userDeleted = await database("usuario").delete().where({ id });
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
