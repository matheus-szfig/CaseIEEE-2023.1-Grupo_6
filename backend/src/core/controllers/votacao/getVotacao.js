import { request, response } from "express";
import findAllService from "../../service/votacao/getVotacao";

export default async function findAll(req = request, res = response) {
  const acha = await findAllService();
  res.json(acha);
}
