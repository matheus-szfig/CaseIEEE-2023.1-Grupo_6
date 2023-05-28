import { database } from "../../../config/database";
const bcrypt = require("bcryptjs")


export async function cadastrateUserService(email, password,name) {
	try {
		const userEmail = await database("usuario").select("*").where({email}).first();
		if (userEmail) {
			throw new Error("Email adress alredy cadastrated!");
		}

        const hash = await bcrypt.hash(password, 123) //estabelecer crypto_key
        
        await database("usuario").insert({
            email,
            password: hash,
            name
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