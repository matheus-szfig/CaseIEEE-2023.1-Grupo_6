import { database } from "../../../config/database";
import { HashPassword } from "../../../utils/secure";

/*function verificaOpcao(valor, opcoes) {
	return opcoes.some(opcao => opcao.nome === valor);
}*/

export async function cadastrateUserService(email, senha,nome,senhaConfirmacao/*, equipes, cargos*/) {
	try {
		/*const equipeOpcoes = await database('equipe').select('nome');
		const cargoOpcoes = await database('cargo').select('nome');

		if(equipes.lenght < 0 ||equipes.lenght > 3 ||cargos.lenght < 0 ||cargos.lenght > 3 ){
			throw new Error("Informe de cargos ou equipes irregular");
		}

        for(let i=0;i<3;i++){
			verificaOpcao(cargos[i].toLowerCase(), cargoOpcoes)
			if(!verificaOpcao){
				throw new Error("Cargo inválido");
			}
		}

		for(let i=0;i<3;i++){
			verificaOpcao(equipes[i].toLowerCase(), equipeOpcoes)
			if(!verificaOpcao){
				throw new Error("Cargo inválido");
			}
		}*/

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
			/*equipe1 : await database('equipe').select('id').where({nome : equipes[1]}),
			cargo1  : await database('cargo').select('id').where({nome : cargos[1]}),
			equipe2  : await database('equipe').select('id').where({nome : equipes[2]}),
			cargo2  : await database('cargo').select('id').where({nome : cargos[2]}),
			equipe3  : await database('equipe').select('id').where({nome : equipes[3]}),
			cargo3  : await database('cargo').select('id').where({nome : cargos[3]})*/
        })

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