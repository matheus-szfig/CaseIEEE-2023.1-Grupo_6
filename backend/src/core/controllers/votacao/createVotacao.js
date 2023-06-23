import { request, response } from "express";
import createVotacao from "../../service/votacao/createVotacao";

export default async function create(req, res) {
    console.log("oi")
    const { titulo, data_inicio } = req.body
    const cadastrate = await createVotacao(titulo, data_inicio );
        return res.json(cadastrate);
}