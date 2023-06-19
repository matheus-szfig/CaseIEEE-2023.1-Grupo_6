import { Router } from 'express';
import { createCargo } from '../controllers/cargo/createController';
import { giveCargo } from '../controllers/cargo/giveController';
import { takeCargo } from '../controllers/cargo/takeController';
import { getCargo } from '../controllers/cargo/getController';
import { deleteCargo } from '../controllers/cargo/deleteController';
import { approveCargo } from '../controllers/cargo/approveController';
import Authorize from '../middlewares/authorization';
import Authenticate from '../middlewares/authentication';

const router_cargo = Router();

router_cargo.post('/give', giveCargo);
router_cargo.post('/take', takeCargo);
router_cargo.post('/create/', createCargo);
router_cargo.get('/get/', getCargo);
router_cargo.delete('/delete/:id/', deleteCargo);
router_cargo.patch('/approve', Authenticate, Authorize(['admin']), approveCargo);

export default router_cargo;