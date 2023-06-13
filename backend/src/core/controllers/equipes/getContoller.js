import { request, response } from "express";
import { findAllEquipes, findMembrosByEquipeId } from "../../service/equipes/get";

// Controlador responsável por buscar todas as equipes
export async function findAll(req = request, res = response) {
  try {
    // Chamando a função findAllEquipes do serviço para buscar todas as equipes
    const equipes = await findAllEquipes();
    
    // Retornando as equipes em formato JSON na resposta
    res.json(equipes);
  } catch (error) {
    // Em caso de erro, exibindo o erro no console e retornando uma resposta de erro ao cliente
    console.error('Erro ao buscar equipes:', error);
    res.status(500).json({ error: 'Erro ao buscar equipes' });
  }
}

// Controlador responsável por buscar os membros de uma equipe específica
export async function findMembrosByEquipe(req = request, res = response) {
  // Obtendo o ID da equipe a partir dos parâmetros da requisição
  const equipeId = req.params.id;

  try {
    // Chamando a função findMembrosByEquipeId do serviço para buscar os membros da equipe pelo ID
    const membros = await findMembrosByEquipeId(equipeId);
    
    // Verificando se não foram encontrados membros
    if (!membros) {
      // Retornando uma resposta de erro com status 404 se nenhum membro for encontrado
      return res.status(404).json({ error: 'Membros não encontrados' });
    }
    
    // Retornando os membros encontrados em formato JSON na resposta
    res.json(membros);
  } catch (error) {
    // Em caso de erro, exibindo o erro no console e retornando uma resposta de erro ao cliente
    console.error('Erro ao buscar membros da equipe:', error);
    res.status(500).json({ error: 'Erro ao buscar membros da equipe' });
  }
}

/*
import {findEquipeById} from "../../service/equipes/get";
export async function findOne(req = request, res = response) {
  const equipeId = req.params.id;

  try {
    const equipe = await findEquipeById(equipeId);
    
    if (!equipe) {
      return res.status(404).json({ error: 'Equipe não encontrada' });
    } */
