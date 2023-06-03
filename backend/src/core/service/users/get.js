import { database } from "../../../config/database";

export async function findAllService() {
    try {
        const users = await database("usuario").select("usuario.id", "usuario.nome", "usuario.email", "equipe.nome as equipe", "cargo.nome as cargo")
        .leftJoin("usuario_equipe", "usuario_equipe.id_usuario", "usuario.id")
        .leftJoin("equipe", "equipe.id", "usuario_equipe.id_equipe")
        .leftJoin("cargo", "cargo.id", "usuario_equipe.id_cargo")
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
        const user = await database("usuario").select("usuario.id", "usuario.nome", "usuario.email", "equipe.nome as equipe", "cargo.nome as cargo")
        .leftJoin("usuario_equipe", "usuario_equipe.id_usuario", "usuario.id")
        .leftJoin("equipe", "equipe.id", "usuario_equipe.id_equipe")
        .leftJoin("cargo", "cargo.id", "usuario_equipe.id_cargo")
        .where("usuario.id", id).first()
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