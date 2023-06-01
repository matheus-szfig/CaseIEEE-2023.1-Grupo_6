
import { database } from "../../../config/database";

export async function updateUserService(id, updatedUser) {
	try {
		const user = await database("usuario").select("*").where({id});
        
		if (user.length === 0) {
			throw new Error("User not find!");
		}

		const userUpdated = await database("usuario").update(updatedUser).where({ id });
		return {
			status: true,
			message: "User Updated!",
		};
	} catch (error) {
        console.log(error);
		return {
			status: false,
			message:error['message'],
		};
	}
}
