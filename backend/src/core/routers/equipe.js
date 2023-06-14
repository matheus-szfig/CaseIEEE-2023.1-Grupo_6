import { Router } from 'express';
import { findAll, findMembrosByEquipe } from '../controllers/equipes/getContoller';

const router_equipe = Router();

router_equipe.get('/', findAll);
router_equipe.get('/:id/membros', findMembrosByEquipe);//chechar referencia 

/* ENCONTRAR EQUIPE ATRAVÉS DE UM ID
import { findOne } from '../controllers/equipes/getController';
router_equipe.get('/:id', findEquipe);
*/

export default router_equipe;


