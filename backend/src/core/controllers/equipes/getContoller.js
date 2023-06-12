import { request, response } from "express";
import { findAllEquipes } from "../../service/equipes/get";

export default async function findAll(req = usuarequest,res = response) {
    //sem requisçoes do body
    //sistema solicita as equipes e a rota entrega
    const findAllService = await findAllEquipes();
	res.json(findAllService);
}