import { database } from "../../../config/database";

export default async function findAllService() {
    try {
        const votacao = await database("votacao").select("*")
            return votacao;
    } catch (error) {
        console.log(error);
		return {
			message:error['message'],
		};
	}
}