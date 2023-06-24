import { request, response } from "express";
import { approveCargoService } from "../../service/cargo/approve";

export async function approveCargo(req = request, res = response) {
  const { id_usuario, id_cargo, id_equipe } = req.body;
  try {
    const approve = await approveCargoService(id_cargo, id_usuario, id_equipe);
    if (!approve) {
      return res.status(404).json(approve);
    }
    res.json(approve);
  } catch (error) {
    console.error("Erro ao aprovar cargo:", error);
    res.status(500).json({ status: false, message: "Erro ao aprovar cargo" });
  }
}
