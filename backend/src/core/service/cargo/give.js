import { database } from "../../../config/database";

export async function giveCargoService(id_usuario, id_equipe, id_cargo) {
	try {
    const cargoExists = await database('cargo').select('*').where({id:id_cargo}).first();
		if(!cargoExists){
			throw new Error("Cargo não encontrado!");
		}

    const equipeExists = await database('equipe').select('*').where({id:id_equipe}).first();
		if(!equipeExists){
			throw new Error("Equipe não encontrada!");
		}

    const userExists = await database('usuario').select('*').where({id:id_usuario}).first();
		if(!userExists){
			throw new Error("Usuário não encontrado!");
		}

		await database('usuario_equipe').insert({
			id_usuario,
			id_equipe,
			id_cargo
		})

		return {
			status: true,
			message:'Adicionado com sucesso!',
		};

	} catch (error) {
		console.log(error)
        return {
			status: false,
			message:error['message'],
		};
	}
}