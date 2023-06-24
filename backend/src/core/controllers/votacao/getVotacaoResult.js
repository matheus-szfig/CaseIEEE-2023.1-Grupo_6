import { request, response } from "express";
import findService from "../../service/votacao/getVotacaoResult";

export default async function find(req = request, res = response) {
  const acha = await findService(req.params.id);
  res.json(acha);
}
