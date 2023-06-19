import { request, response } from "express";
import { approveCargoService } from "../../service/cargo/approve";

export async function approveCargo(req = request, res = response) {
  const cargoId = req.params.id;
  try {
    const approve = await approveCargoService(cargoId);
    if (!approve) {
      return res.status(404).json({ error: 'Cargo não encontrado' });
    }
    res.json(approve);
  } catch (error) {
    console.error('Erro ao aprovar cargo:', error);
    res.status(500).json({ error: 'Erro ao aprovar cargo' });
  }
}