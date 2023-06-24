import { request, response } from "express";
import { updateEquipeService } from "../../service/equipes/update";

export default async function updateEquipe(req = request, res = response) {
  const updateId = req.params.id;
  let updatedEquipe = {
    nome: req.body.nome,
    img_url: req.body?.img_url,
  };
  const updateService = await updateEquipeService(updateId, updatedEquipe);
  res.json(updateService);
}
