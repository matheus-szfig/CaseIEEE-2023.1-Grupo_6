import { database } from "../../../config/database";

// Função responsável por buscar todas as equipes
export async function findAllEquipes() {
  try {
    // Consulta ao banco de dados para selecionar os campos "id" e "nome" da tabela "equipes"
    const equipes = await database("equipe").select("nome");
    
    // Retornando as equipes encontradas
    return{equipes};
  } catch (error) {
    // Em caso de erro, exibindo o erro no console e lançando uma exceção
    console.error("Erro ao buscar equipes:", error);
    throw new Error("Erro ao buscar equipes");
  }
}

// Função responsável por buscar os membros de uma equipe pelo ID da equipe
export async function findMembrosByEquipeId(equipeId) {
  try {
    // Consulta ao banco de dados para selecionar os campos "id", "nome" e "equipeId" da tabela "membros"
    // onde "equipeId" seja igual ao ID da equipe fornecido
    const idUsuario = await database("usuario_equipe")
      .select("id_usuario")
      .where({"id_equipe" : equipeId});

      const nomeUsuario = await database("usuario")
      .select("nome")
      .where({"id" : idUsuario});  

      const idCargo = await database("usuario_equipe")
      .select("id_cargo")
      .where({"id_usuario" : idUsuario});

      const nomeCargo = await database("cargo")
      .select("nome")
      .where({"id" : idCargo});
    
    // Verificando se não foram encontrados membros
    if (membros.length === 0) {
      // Retornando null caso nenhum membro seja encontrado
      return null;
    }
    
    // Retornando os membros encontrados
    return {
      nomeUsuario,
      nomeCargo
    }
  } catch (error) {
    // Em caso de erro, exibindo o erro no console e lançando uma exceção
    console.error("Erro ao buscar membros da equipe:", error);
    throw new Error("Erro ao buscar membros da equipe");
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
