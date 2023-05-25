import { Router, request, response } from "express";
import GetUsers from "../controllers/users/get";
import DeleteUser from "../controllers/users/delete";

const router_usuario = Router();

router_usuario.get("/", GetUsers);
router_usuario.delete("/delete/:id", DeleteUser);
// router_usuario.get("/", GetUsuarios);
// router_usuario.get("/", GetUsuarios);

export default router_usuario;
