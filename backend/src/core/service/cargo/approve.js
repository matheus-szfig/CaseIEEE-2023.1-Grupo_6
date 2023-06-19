import { database } from "../../../config/database";

export async function approveCargoService(id) {
  try {
    const cargo = await database("cargos").select("*").where({ id }).first();

    if (!cargo) {
      throw new Error("Cargo não encontrado");
    }

    const isAdmin = true; // Verificar se o usuário logado é um administrador

    if (!isAdmin) {
      throw new Error("Apenas administradores podem aprovar cargos");
    }

    await database("cargos").where({ id }).update({ aprovado: true });

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
