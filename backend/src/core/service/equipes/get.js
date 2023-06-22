import { database } from "../../../config/database";

// Função responsável por buscar todas as equipes
export async function findAllEquipes() {
  try {
    // Consulta ao banco de dados para selecionar os campos "id" e "nome" da tabela "equipes"
    const equipes = await database("equipe")
      .select("id", "nome")
      .orderBy("id", "asc");

    // Retornando as equipes encontradas
    return { equipes };
  } catch (error) {
    // Em caso de erro, exibindo o erro no console e lançando uma exceção
    console.error("Erro ao buscar equipes:", error);
    throw new Error("Erro ao buscar equipes");
  }
}

// Função responsável por buscar os membros de uma equipe pelo ID da equipe
export async function findMembrosByEquipeId(equipeId) {
  try {
    //captura o id do usuario e o cargo dele a partir do equipeId
    const ids_membros = await database("v_c_usuario")
      .select("id_usuario", "cargo")
      .where({ id_equipe: equipeId });

    //pega os ids dos usuarios da requisição acima e junta. Usado para filtrar os selects
    const id_usuarios = ids_membros.map((membro) => membro.id_usuario);

    //captura o id e o nome do usuario
    const usuarios = await database("usuario")
      .select("id", "nome")
      .whereIn("id", id_usuarios);

    // captura o id e o nome do cargo
    const cargos = await database("v_c_usuario")
      .select("id_usuario", "cargo")
      .whereIn("id_usuario", id_usuarios);

    //verificação
    if (usuarios.length <= 0 || cargos.length <= 0) {
      throw new Error("Irregularidade. Equipe vazia");
    }

    //junta as informações onbtidas em uma resposta só
    const info = usuarios.map((usuario) => {
      const { id, nome } = usuario;
      const membro = cargos.find((membro) => membro.id_usuario === usuario.id);
      const cargo = membro ? membro.cargo : null;
      return { id_usuario: id, nome, cargo };
    });

    //captura o nome da equipe
    const nomeEquipe = await database("equipe")
      .select({ nome_da_equipe: "nome" })
      .where({ id: equipeId });

    // Retornando os membros encontrados
    return {
      status: true,
      equipe_selecionada: nomeEquipe,
      membros: info,
    };
  } catch (error) {
    // Em caso de erro, exibindo o erro
    return {
      status: false,
      message: error["message"],
    };
  }
}

/* 
import { database } from "../../../config/database";

export async function findEquipeById(equipeId) {
  try {
    const equipe = await database("equipes")
      .select("id", "nome")
      .where("id", equipeId)
      .first();
    
    return equipe;
  } catch (error) {
    console.error("Erro ao buscar equipe:", error);
    throw new Error("Erro ao buscar equipe");
  }
}
*/
