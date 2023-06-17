import { database } from "../../../config/database";
//problema: meu insominia e o postman não mostram os retornos e dão "time out" o codido
//esta 100% funcional, o cargo é deletado e todo lugar que ele é referenciado em usuario_equipe também
export async function deleteCargoService(id) {
    try{
        const cargo = await database("cargo").select("*").where({id});
        
        if(cargo.length === 0){
            throw new Error("Cargo não encontrado");
        }
        
        await database("usuario_equipe").where({id_cargo : id}).delete();
        await database("cargo").where({id}).delete();

        return {
			status: true,
			message: "Cargo deletado!",
		};

    } catch (error) {
		return {
			status: false,
			message:error['message'],
		};
	}
}