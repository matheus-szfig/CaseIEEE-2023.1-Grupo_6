import { Router, request, response } from "express";
import findAll from "../controllers/equipes/getContoller";

const router_equipe = Router();

router_equipe.get('/', findAll);

export default router_equipe;

