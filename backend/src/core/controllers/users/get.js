import { request, response } from "express";
import { findAllService, findOneService } from "../service/users/get";

export default async function findAll(req = request, res = response) {
  res.json(findAllService);
}

export default async function findOne(req = request, res = response) {
  const userId = req.params.id;
  const findOne = await findOneService(userId);
  res.json(findOne);
}