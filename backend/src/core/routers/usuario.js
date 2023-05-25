import { Router, request, response } from "express";
import GetUsuarios from "../controllers/usuarios/get";

const router_usuario = Router();

router_usuario.get("/", GetUsuarios);

export default router_usuario;
