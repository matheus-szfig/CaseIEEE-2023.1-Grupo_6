import { database } from "../../../config/database";

export async function findAllEquipes() {
	try {
		//logica do get
        return {
			status:true
		};
	} catch (error) {
		return {
			status: false,
			message:error['message'],
		};
	}
}