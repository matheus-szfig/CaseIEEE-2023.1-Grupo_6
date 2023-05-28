import { request, response } from "express";
import { cadastrateUserService } from "../../service/users/cadastrate";

export default async function CadastrateUser(req = request,res = response) {
    const {name, email, password} = req.body

    const cadastrateService = await cadastrateUserService(email, password,name);
	res.json(cadastrateService);
}