import { database } from "../../../config/database";

export async function deleteUserService(id) {
  try {
    const user = await database("usuario").select("*").where({ id, ativo: 1 });

    if (user.length === 0) {
      throw new Error("User not found!");
    }

    await database("usuario_equipe").where({ id_usuario: id }).delete();
    await database("usuario_permissao").where({ id_usuario: id }).delete();
    await database("voto_equipe").where({ id_usuario_ator: id }).delete();
    await database("voto_usuario").where({ id_usuario_ator: id }).delete();
    await database("usuario").where({ id }).delete();

    return {
      status: true,
      message: "User deleted!",
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
      message: error.message,
    };
  }
}
