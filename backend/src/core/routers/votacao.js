import { Router } from "express";
import findAll from "../controllers/votacao/getVotacao";
import create from "../controllers/votacao/createVotacao";
import update from "../controllers/votacao/updateVotacao";
import find from "../controllers/votacao/getVotacaoResult";

const router_votacao = Router();

router_votacao.get("/", findAll);
router_votacao.get("/:id", find);
router_votacao.post("/create", create);
router_votacao.patch("/update", update);

export default router_votacao;
