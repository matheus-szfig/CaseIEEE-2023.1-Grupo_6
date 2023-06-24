import { request, response } from "express";
import { deleteEquipeService } from "../../service/equipes/delete";

export default async function DeleteEquipe(req = request, res = response) {
  const deleteId = req.params.id;

  const deleteService = await deleteEquipeService(deleteId);
  res.json(deleteService);
}
