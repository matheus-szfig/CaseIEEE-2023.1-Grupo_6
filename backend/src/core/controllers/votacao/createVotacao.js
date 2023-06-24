import { request, response } from "express";
import createVotacao from "../../service/votacao/createVotacao";

export default async function create(req, res) {
    const { titulo } = req.body
    const data_inicio = new Date();
    const cadastrate = await createVotacao(titulo, data_inicio );
    return res.json(cadastrate);
}