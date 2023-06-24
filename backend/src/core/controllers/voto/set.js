import { request, response } from "express";
import votarService from "../../service/voto/votarService";

export default async function setVotos(req = request, res = response) {
  const userInfo = req.cookies["access_token"];
  const { equipes, usuarios } = req.body;
  const voteRes = await votarService(userInfo.id, equipes, usuarios);
  return res.json(voteRes);
}
