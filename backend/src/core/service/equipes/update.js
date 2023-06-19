import { database } from "../../../config/database";

export async function updateEquipeService(id, updatedEquipe) {
	try {
		const equipe = await database("equipe").select("*").where({ id });

		if (equipe.length === 0) {
			throw new Error("Equipe not found!");
		}

		const equipeUpdated = await database("equipe").where({ id }).update(updatedEquipe);
		return {
			status: true,
			message: "Equipe updated!",
		};
	} catch (error) {
		console.log(error);
		return {
			status: false,
			message: error.message,
		};
	}
}
