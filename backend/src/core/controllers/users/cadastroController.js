import { request, response } from "express";
import { cadastrateUserService } from "../../service/users/cadastrate";

export default async function CadastrateUser(req = request,res = response) {
    const {email, senha, nome, senhaConfirmacao} = req.body

    const cadastrateService = await cadastrateUserService(email, senha,nome, senhaConfirmacao);
	res.json(cadastrateService);
}