import { request, response } from "express";
import { database } from "../../../config/database";

export default async function findAllvoto(req, res) {
  try {
    const votacao = await database("votacao").select("*");
    return res.json(votacao);
  } catch (error) {
    return res.json(error);
  }
}
