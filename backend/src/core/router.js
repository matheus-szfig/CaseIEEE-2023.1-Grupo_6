import { Router, request, response } from "express";
import router_usuario from "./routers/user";
import router_equipe from "./routers/equipe";
import router_cargo from "./routers/cargo";
import router_votacao from "./routers/votacao";

const router = Router();

router.use("/user", router_usuario);
router.use("/equipe", router_equipe);
router.use("/cargo", router_cargo);
router.use("/votacao", router_votacao);

export default router;
