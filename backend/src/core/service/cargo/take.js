import { database } from "../../../config/database";

export async function takeCargoService(id_usuario, id_equipe, id_cargo) {
  try {
    const cargoExists = await database("usuario_equipe")
      .select("*")
      .where({ id_cargo, id_usuario, id_equipe })
      .first();
    if (!cargoExists) {
      throw new Error("Usuário não possui o cargo!");
    }

    await database("usuario_equipe").delete().where({
      id_usuario,
      id_equipe,
      id_cargo,
    });

    return {
      status: true,
      message: "Removido com sucesso!",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: error["message"],
    };
  }
}
