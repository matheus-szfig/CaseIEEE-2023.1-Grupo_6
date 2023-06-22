import { request, response } from "express";
import { getCargoService } from "../../service/cargo/get";

//mostra TODOS os cargos
export async function getCargo(req = request, res = response) {
  try {
    const cargos = await getCargoService();
    res.json(cargos);
  } catch (error) {
    console.error("Erro ao buscar cargos:", error);
    res.status(500).json({ error: "Erro ao buscar cargos" });
  }
}
