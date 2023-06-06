import { database } from "../../../config/database";
import { HashPassword } from "../../../utils/secure";

function verificaOpcao(valor, opcoes) {
	return opcoes.some(opcao => opcao.nome === valor);
}

export async function cadastrateUserService(email, senha,nome,senhaConfirmacao, cargos,permissao) {
	try {
		if(nome==="" || nome===null || nome==undefined ||
			senha==="" || senha===null || senha==undefined ||
			senhaConfirmacao==="" || senhaConfirmacao===null || senhaConfirmacao==undefined)
			{
				throw new Error("Preencha os campos obrigatórios.");
			}

		const equipeOpcoes = await database('equipe').select('nome');
		const cargoOpcoes = await database('cargo').select('nome');
		if(cargos.length < 1 || cargos.length > 3){
			throw new Error("Informe de cargos ou equipes irregular.");
		}

		cargos.forEach(c => {
			const verificador = verificaOpcao(c['cargo'], cargoOpcoes) && verificaOpcao(c['equipe'], equipeOpcoes);
			console.log(c['cargo']);

			if(!verificador){
				throw new Error("Cargo inválido");
			}
		});

		if(senha.length<4){
            throw new Error("Senha muito curta!");
        }

        if(senha!==senhaConfirmacao){
            throw new Error("As senhas precisam ser iguais");
        }

		const userEmail = await database("usuario").select("*").where({email}).first();
		if (userEmail) {
			throw new Error("Endereço de e-mail já cadastrado!");
		}

		if (permissao) {
			permissao = 0;
		} else if (!permissao) {
			permissao = 1;
		} else {
			throw new Error("Erro no informe de permissões");
		}

        const hash = await HashPassword(senha)
        await database("usuario").insert({
            email,
            senha: hash,
            nome,
			notify : permissao
        })

		const idUser = await database('usuario').select('id').where({"email": email }).first();
		for(let i=0;i<3;i++){
			if (cargos[i]==="" || cargos[i]===undefined || cargos[i]===null) {
				break;
			}
			let cargoUser = await database('cargo').select('id').where({"nome" : cargos[i].cargo}).first()
			let equipesUser = await database('equipe').select('id').where({"nome" : cargos[i].equipe}).first()
			await database("usuario_equipe").insert({
				id_usuario : idUser.id,
				id_cargo : cargoUser.id,
				id_equipe  : equipesUser.id,
				aprovado : 0
			})	
		}
		return {
			status: true,
			message: "Usuário cadastrado com êxito",
		};

	} catch (error) {
		return {
			status: false,
			message:error['message'],
		};
	}
}