import { Router, request, response } from "express";
import GetUsers from "../controllers/users/get";
import DeleteUser from "../controllers/users/delete";
import CadastrateUser from "../controllers/users/cadastroController";

const router_usuario = Router();

router_usuario.get("/", GetUsers);
router_usuario.delete("/delete/:id", DeleteUser);
router_usuario.post("/cadaster", CadastrateUser);
// router_usuario.get("/", GetUsuarios);
// router_usuario.get("/", GetUsuarios);

export default router_usuario;
