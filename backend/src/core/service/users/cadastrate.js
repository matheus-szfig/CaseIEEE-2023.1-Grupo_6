import { database } from "../../../config/database";
const bcrypt = require("bcryptjs")


export async function cadastrateUserService(email, senha,nome,senhaConfirmacao) {
	try {
        
        if(senha!==senhaConfirmacao){
            console.log("oi")
            throw new Error("Passwords need to be equal");
        }

		const userEmail = await database("usuario").select("*").where({email}).first();
		if (userEmail) {
			throw new Error("Email adress alredy cadastrated!");
		}

        const hash = await bcrypt.hash(senha, 10) //estabelecer crypto_key
        
        await database("usuario").insert({
            email,
            senha: hash,
            nome
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