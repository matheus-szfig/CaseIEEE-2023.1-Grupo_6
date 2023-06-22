import { Router } from "express";
import findAll from "../controllers/votacao/getVotacao";
import create from "../controllers/votacao/createVotacao";


const router_votacao = Router();

router_votacao.get("/", findAll);
router_votacao.post("/create", create);

export default router_votacao;