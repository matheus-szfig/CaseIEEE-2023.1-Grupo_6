import { database } from "../../../config/database";

export async function deleteEquipeService(id) {
  try {
    const equipe = await database("equipe").select("*").where({ id });

    if (equipe.length === 0) {
      throw new Error("Equipe not found!");
    }

    // remove as dependencias na tabela usuario_equipe
    await database("usuario_equipe").where({ id_equipe: id }).delete();

    await database("equipe").where({ id }).delete();

    return {
      status: true,
      message: "Equipe deleted!",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: error.message,
    };
  }
}
