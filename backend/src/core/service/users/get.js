import { database } from "../../../config/database";

export async function findAllService() {
    try {
        let users = await database("usuario").select("id", "nome", "email")
        users = users.map(async u=>{
            const cargos = await database("v_c_usuario").select("id_usuario", "id_cargo", "id_equipe", "equipe", "cargo", "aprovado").where("id_usuario", u.id)
            return{...u,
                cargos}
        })
        users = Promise.all(users)
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
        const user = await database("usuario").select("id", "nome", "email").where("id", id).first()
        const cargos = await database("v_c_usuario").select("id_usuario", "id_cargo", "id_equipe", "equipe", "cargo", "aprovado").where("id_usuario", user.id)
        const info = {
            ...user,
            cargos
        }
        return info;
    } catch (error) {
        console.log(error);
		return {
			message:error['message'],
		};
	}
}