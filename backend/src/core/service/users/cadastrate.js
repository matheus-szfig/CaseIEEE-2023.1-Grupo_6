import { database } from "../../../config/database";
import { HashPassword } from "../../../utils/secure";

function verificaOpcao(valor, opcoes) {
	return opcoes.some(opcao => opcao.nome === valor);
}

export async function cadastrateUserService(email, senha,nome,senhaConfirmacao, cargos) {
	try {
		const equipeOpcoes = await database('equipe').select('nome');
		const cargoOpcoes = await database('cargo').select('nome');

		if(cargos.length < 1 || cargos.length > 3){
			throw new Error("Informe de cargos ou equipes irregular.");
		}

		cargos.forEach(c => {
			const verificador = verificaOpcao(c['cargo'].toLowerCase(), cargoOpcoes) && verificaOpcao(c['equipe'].toLowerCase(), equipeOpcoes);
			if(!verificador){
				throw new Error("Cargo inválido");
			}
		});

		if(senha.length<4){
            throw new Error("Too short password");
        }

        if(senha!==senhaConfirmacao){

            throw new Error("Passwords need to be equal");
        }

		const userEmail = await database("usuario").select("*").where({email}).first();
		if (userEmail) {
			throw new Error("Email adress alredy cadastrated!");
		}

        const hash = await HashPassword(senha)
        await database("usuario").insert({
            email,
            senha: hash,
            nome,
        })

		const idUser = await database('usuario').select('id').where({"email": email }).first();
		for(let i=0;i<3;i++){
			if (cargos[i] === "" || equipes[i] === "") {
				break;
			}
			let cargoUser = await database('cargo').select('id').where({"nome" : cargos[i]}).first()
			let equipesUser = await database('equipe').select('id').where({"nome" : equipes[i]}).first()
			await database("usuario_equipe").insert({
				id_usuario : idUser.id,
				id_cargo : cargoUser.id,
				id_equipe  : equipesUser.id,
				aprovado : 0
			})

		}

		return {
			status: true,
			message: "User successfully cadastrated!",
		};

	} catch (error) {
        console.log(error);
		return {
			status: false,
			message:error['message'],
		};
	}
}