import { request, response } from "express";
import { takeCargoService } from "../../service/cargo/take";

export async function takeCargo(req = request, res = response) {
  const { id_usuario, id_equipe, id_cargo } = req.body;
  try {
    const removeCargo = await takeCargoService(id_usuario, id_equipe, id_cargo);
    res.json(removeCargo);
  } catch (error) {
    console.error("Erro ao remover cargo:", error);
    res.status(500).json({ status: false, message: error.message });
  }
}
