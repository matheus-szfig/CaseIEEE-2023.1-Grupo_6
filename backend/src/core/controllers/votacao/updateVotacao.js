import { request, response } from "express";

import updateVotacao from "../../service/votacao/updateVotacao";

export default async function create(req, res) {
    const { id, data_fim } = req.body
    const cadastrate = await updateVotacao(id, data_fim );
        return res.json(cadastrate);
}