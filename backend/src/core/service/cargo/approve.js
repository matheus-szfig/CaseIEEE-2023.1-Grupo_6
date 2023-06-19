import { database } from "../../../config/database";

export async function approveCargoService(id_cargo, id_usuario, id_equipe) {
  try {
    const cargo = await database("usuario_equipe").select("*").where({ id_cargo, id_usuario, id_equipe }).first();

    if (!cargo) {
      throw new Error("Cargo não encontrado");
    }

    await database("usuario_equipe").where({ id }).update({ aprovado: 1 });

    return {
      status: true,
      message: "Cargo aprovado com sucesso!",
    };
  } catch (error) {
    return {
      status: false,
      message: error.message,
    };
  }
}
