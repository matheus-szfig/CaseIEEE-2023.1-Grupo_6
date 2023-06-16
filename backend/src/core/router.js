import { Router, request, response } from "express";
import router_usuario from "./routers/user";
import router_equipe from "./routers/equipe";

const router = Router();

router.use("/user", router_usuario);
router.use("/equipe", router_equipe);

export default router;
