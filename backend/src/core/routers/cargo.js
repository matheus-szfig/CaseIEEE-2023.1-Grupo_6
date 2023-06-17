import { Router } from 'express';
import { createCargo } from '../controllers/cargo/createController';
import { getCargo } from '../controllers/cargo/getController';
import { deleteCargo } from '../controllers/cargo/deleteController';
import { approveCargo } from '../controllers/cargo/approveController';

const router_cargo = Router();

router_cargo.post('/create/', createCargo);
router_cargo.get('/get/', getCargo);
router_cargo.delete('/delete/:id/', deleteCargo);
router_cargo.patch('/approve/:id/', approveCargo);

export default router_cargo;