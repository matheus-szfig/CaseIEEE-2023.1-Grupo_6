import { database } from "../../../config/database";

export default async function createVotacao( titulo, data_inicio) {
    try {
        await database("votacao").insert({
            titulo,
            data_inicio,
            data_fim: null
        });
        return {
			status: true,
			message: "Votação criada com sucesso",
		};

	} catch (error) {
		return {
			status: false,
			message:error['message'],
		};
	}
}