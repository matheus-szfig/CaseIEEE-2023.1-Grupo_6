import { request, response } from "express";
import { database } from "../../../config/database";

export default async function create(req, res) {
  const { id, titulo, data_inicio, data_fim } = req.body;
  try {
    await database("votacao").insert({
      id,
      titulo,
      data_inicio,
      data_fim,
    });
    return res.json({ message: "Tudo certo" });
  } catch (error) {
    return res.json(error);
  }
}
