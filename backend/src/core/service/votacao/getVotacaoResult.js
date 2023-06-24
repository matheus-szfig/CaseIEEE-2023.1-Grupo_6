import { database } from "../../../config/database";

export default async function findService(id) {
    try {
        const vot = await database("votacao").where({id}).first();
        if(!vot){
            throw new Error('Votação não encontrada!');
        }

        let obj = {}

        await database.transaction(async trx => {
            const resultEquipes = await trx.raw(`
                SELECT
                    id_equipe_alvo as id_equipe,
                    e.nome as nome,
                    COUNT(*) as qnt
                FROM voto_equipe ve
                JOIN equipe e ON e.id = ve.id_equipe_alvo
                WHERE id_votacao = '${id}'
                GROUP BY id_equipe_alvo, id_votacao
            `);
            obj['equipes'] = resultEquipes[0];

            const resultUsuarios = await trx.raw(`
                SELECT
                    id_usuario_alvo as id_usuario,
                    u.nome as nome,
                    COUNT(*) as qnt
                FROM voto_usuario vu
                JOIN usuario u ON u.id = vu.id_usuario_alvo
                WHERE vu.id_votacao = '${id}'
                GROUP BY id_usuario_alvo, id_votacao
            `);
            obj['usuarios'] = resultUsuarios[0];
        })
        return obj;
    } catch (error) {
        console.log(error);
        error.message = !!error.sqlMessage ? 'Não foi possível completar sua solicitação!' : error.message;
		return {
            status:false,
			message:error['message'],
		};
	}
}