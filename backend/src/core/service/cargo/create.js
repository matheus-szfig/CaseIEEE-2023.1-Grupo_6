import { database } from "../../../config/database";

export async function createCargoService(nome) {
	try {
        //teste para ver se o nome é  válido
		if(nome==="" || nome===null || nome==undefined){
            throw new Error("O nome não pode ser vazio.");
        }

        //inserção no banco
        await database("cargo").insert({ nome : nome })

		return {
			status: true,
			message: "Cargo criado com êxito",
		};

	} catch (error) {
		console.log(error)
        return {
			status: false,
			message:error['message'],
		};
	}
}