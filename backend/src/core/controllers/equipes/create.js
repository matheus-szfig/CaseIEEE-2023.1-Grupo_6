import { request, response } from "express";
import { createEquipeService } from "../../service/equipes/create";

export default async function createEquipe(req = request, res = response) {
    let newEquipe = {
        nome: req.body.nome,
        img_url: req.body?.img_url
    }
	const createService = await createEquipeService(newEquipe);
	res.json(createService);
}