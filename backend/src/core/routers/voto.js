import { Router } from "express";
import getVotos from "../controllers/voto/get";
import Authenticate from "../middlewares/authentication";
import setVotos from "../controllers/voto/set";

const router_voto = Router();

router_voto.get("/", Authenticate, getVotos);
router_voto.post("/", Authenticate, setVotos);
// router_voto.post("/equipe", update);
// router_voto.post("/usuario", update);

export default router_voto;
