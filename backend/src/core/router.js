import { Router, request, response } from "express";
import router_usuario from "./routers/usuario";

const router = Router();

router.use("/user", router_usuario);

export default router;
