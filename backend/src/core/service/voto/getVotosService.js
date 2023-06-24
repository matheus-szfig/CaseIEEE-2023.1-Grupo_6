import { database } from "../../../config/database";

export default async function getVotoService(id_usuario) {
  try {
    let votos = await database.raw(`
          SELECT
            ve.id_equipe_alvo as id_alvo,
            'equipe' as tipo
          FROM voto_equipe ve
          JOIN votacao v ON v.id = ve.id_votacao
          WHERE id_usuario_ator='${id_usuario}'
          AND v.data_fim is NULL
          UNION
          SELECT
            vu.id_usuario_alvo as id_alvo,
            'usuario' as tipo
          FROM voto_usuario vu
          JOIN votacao v ON v.id = vu.id_votacao
          WHERE id_usuario_ator='${id_usuario}'
          AND v.data_fim is NULL
        `);
    [votos] = votos;
    votos = {
      equipe: votos.filter((v) => v.tipo === "equipe").map((v) => v.id_alvo),
      user: votos.filter((v) => v.tipo === "usuario").map((v) => v.id_alvo),
    };
    return votos;
  } catch (error) {
    console.log(error);
    return {
      message: error["message"],
    };
  }
}
