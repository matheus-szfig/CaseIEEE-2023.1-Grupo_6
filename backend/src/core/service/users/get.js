import { database } from "../../../config/database";

export async function findAllService() {
    try {
        const users = await database("usuario").select("id", "nome", "email")
        return users;
    } catch (error) {
        console.log(error);
		return {
			message:error['message'],
		};
	}
}

export async function findOneService(id) {
    try {
        const user = await database("usuario").select("id", "nome", "email").where({id}).first()
        if(!user) {
            throw new Error("User not found");
        }
        return user;
	} catch (error) {
        console.log(error);
		return {
			message:error['message'],
		};
	}
}