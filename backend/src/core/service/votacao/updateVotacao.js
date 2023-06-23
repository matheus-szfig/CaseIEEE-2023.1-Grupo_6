import { database } from "../../../config/database";

export default async function updateVotacao( id, data_fim) {
    try {
        
        await database("votacao").update({
            data_fim
        }).where({id})
        return {
			status: true,
			message: "Votação encerrada com sucesso",
		};

	} catch (error) {
		return {
			status: false,
			message:error['message'],
		};
	}
}