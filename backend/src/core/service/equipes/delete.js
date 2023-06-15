import { database } from "../../../config/database";

export async function deleteEquipeService(id) {
	try {
		const equipe = await database("equipe").select("*").where({ id });

		if (equipe.length === 0) {
			throw new Error("Equipe not found!");
		}

		const equipeDeleted = await database("equipe").where({ id }).delete();
		return {
			status: true,
			message: "Equipe deleted!",
		};
	} catch (error) {
		console.log(error);
		return {
			status: false,
			message: error.message,
		};
	}
}
