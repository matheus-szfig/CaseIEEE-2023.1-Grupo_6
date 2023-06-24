import { database } from "../../../config/database";

export default async function votarService(id_usuario, equipes, usuarios) {
  try {
    const votAberta = await database("votacao")
      .select("id")
      .whereRaw("data_fim is null")
      .first();
    if (!votAberta) {
      throw new Error("Não há votação aberta");
    }
    await database.transaction(async (trx) => {
      await database("voto_equipe")
        .delete()
        .where({ id_usuario_ator: id_usuario });
      await database("voto_usuario")
        .delete()
        .where({ id_usuario_ator: id_usuario });

      let proms = equipes?.map(async (ve) => {
        await database("voto_equipe")
          .insert({
            id_usuario_ator: id_usuario,
            id_equipe_alvo: ve,
            id_votacao: votAberta.id,
          })
          .transacting(trx);
      });

      await Promise.all(proms);

      proms = usuarios?.map(async (vu) => {
        await database("voto_usuario")
          .insert({
            id_usuario_ator: id_usuario,
            id_usuario_alvo: vu,
            id_votacao: votAberta.id,
          })
          .transacting(trx);
      });

      await Promise.all(proms);
    });
    return { status: true };
  } catch (error) {
    console.log(error);
    return { status: false, message: "Não foi possível realizar os votos!" };
  }
}
