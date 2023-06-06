import { request, response } from "express";
import { cadastrateUserService } from "../../service/users/cadastrate";

export default async function CadastrateUser(req = request,res = response) {
    const {email, senha, nome, senhaConfirmacao, equipe1, equipe2, equipe3, cargo1, cargo2, cargo3,permissao} = req.body
    const cargos = [];

    if(cargo1 && equipe1) cargos.push({cargo:cargo1, equipe:equipe1});
    if(cargo2 && equipe2) cargos.push({cargo:cargo2, equipe:equipe2});
    if(cargo3 && equipe3) cargos.push({cargo:cargo3, equipe:equipe3});

    const cadastrateService = await cadastrateUserService(email, senha,nome, senhaConfirmacao, cargos,permissao);
	res.json(cadastrateService);
}