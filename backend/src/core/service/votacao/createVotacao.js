import { database } from "../../../config/database";

export default async function createVotacao(id, titulo, data_inicio, data_fim) {
    try {
        await database("votacao").insert({
            id,
            titulo,
            data_inicio,
            data_fim
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