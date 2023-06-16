import { database } from "../../../config/database";

export async function createEquipeService(newEquipe) {
	try {
		const equipeCreated = await database("equipe").insert(newEquipe);
		return {
			status: true,
			message: "Equipe created!",
			equipeId: equipeCreated[0],
		};
	} catch (error) {
		console.log(error);
		return {
			status: false,
			message: error.message,
		};
	}
}
