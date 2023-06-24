import { request, response } from "express";
import getVotoService from "../../service/voto/getVotosService";

export default async function getVotos(req = request, res = response) {
    const userInfo = req.cookies["access_token"];
    const voteRes = await getVotoService(userInfo.id);
    return res.json(voteRes);
}