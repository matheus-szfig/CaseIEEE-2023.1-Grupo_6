import { database } from "../../../config/database";

export async function deleteUserService(id) {
  const transaction = await database.transaction(); // Inicia a transação

  try {
    const user = await transaction("usuario").select("*").where({ id, ativo: 1 });

    if (user.length === 0) {
      throw new Error("User not found!");
    }

    await transaction("usuario_equipe").update({ id_usuario: 1 }).where({ id_usuario: id });
    await transaction("usuario_permissao").update({ id_usuario: 1 }).where({ id_usuario: id });
    await transaction("voto_equipe").update({ id_usuario_ator: 1 }).where({ id_usuario_ator: id });
    await transaction("voto_usuario").update({ id_usuario_ator: 1 }).where({ id_usuario_ator: id });
    await transaction("usuario").where({ id }).delete();

    await transaction.commit(); // Confirma a transação

    return {
      status: true,
      message: "User deleted!",
    };
  } catch (error) {
    console.log(error);
    await transaction.rollback(); // Desfaz a transação em caso de erro

    return {
      status: false,
      message: error.message,
    };
  } finally {
    transaction.release(); // Libera a transação
  }
}