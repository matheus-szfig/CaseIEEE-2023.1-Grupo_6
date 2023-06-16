import { Router } from 'express';
import { findAll, findMembrosByEquipe,  } from '../controllers/equipes/getContoller';
import UpdateEquipe from '../controllers/equipes/update';
import DeleteEquipe from '../controllers/equipes/delete';
import CreateEquipe from '../controllers/equipes/create';

const router_equipe = Router();

router_equipe.get('/', findAll);
router_equipe.get('/:id/membros', findMembrosByEquipe);//chechar referencia 

/* ENCONTRAR EQUIPE ATRAVÉS DE UM ID
import { findOne } from '../controllers/equipes/getController';
router_equipe.get('/:id', findEquipe);
*/

// create
router_equipe.post("/create", CreateEquipe);

// update
router_equipe.patch("/update/:id",UpdateEquipe);

// delete
router_equipe.delete("/delete/:id", DeleteEquipe);


export default router_equipe;


