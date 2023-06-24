import { request, response } from "express";
import createVotacao from "../../service/votacao/createVotacao";

export default async function create(req, res) {
  const data_inicio = new Date();
  const titulo = 'Votação '+ data_inicio.toISOString().split('T')[0].split('-').splice(0, 2).reverse().toString().replace(/\,/g, '/');
  const cadastrate = await createVotacao(titulo, data_inicio);
  return res.json(cadastrate);
}
