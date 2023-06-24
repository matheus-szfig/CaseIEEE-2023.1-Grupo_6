import { request, response } from "express";

import updateVotacao from "../../service/votacao/updateVotacao";

export default async function create(req, res) {
  const { id } = req.body;
  const data_fim = new Date();
  const cadastrate = await updateVotacao(id, data_fim);
  return res.json(cadastrate);
}
