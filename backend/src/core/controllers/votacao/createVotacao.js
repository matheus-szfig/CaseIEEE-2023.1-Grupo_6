import { request, response } from "express";
import createVotacao from "../../service/votacao/createVotacao";

export default async function create(req, res) {
    const { id, titulo, data_inicio, data_fim } = req.body
    const cadastrate = await createVotacao(id, titulo, data_inicio, data_fim);
        return res.json(cadastrate);
}