import { database } from "../../../config/database";

// Função responsável por buscar TODOS os cargos
export async function getCargoService() {
  try {
    const cargos = await database("cargo").select("id","nome").orderBy("id", "asc");
    
    return{cargos};
  } catch (error) {
    console.error("Erro ao buscar cargos:", error);
    throw new Error("Erro ao buscar cargos");
  }
}