import { request, response } from "express";
import { cadastrateUserService } from "../../service/users/cadastrate";

export default async function CadastrateUser(req = request,res = response) {
    const {email, senha, nome, senhaConfirmacao, equipe1, equipe2, equipe3, cargo1, cargo2, cargo3} = req.body
    const equipes = [equipe1, equipe2, equipe3];
    const cargos = [cargo1, cargo2, cargo3];

    const cadastrateService = await cadastrateUserService(email, senha,nome, senhaConfirmacao, equipes, cargos);
	res.json(cadastrateService);
}