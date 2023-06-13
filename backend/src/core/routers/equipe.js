import { Router } from 'express';
import { findAll, findMembrosByEquipe } from '../controllers/equipes/getContoller';

const router_equipe = Router();

router_equipe.get('/', findAll);
router_equipe.get('/:id/membros', findMembrosByEquipe); // Não sei se essa referência a id membros está correta

/*
import { findOne } from '../controllers/equipes/getController';
router_equipe.get('/:id', findEquipe);
*/

export default router_equipe;


