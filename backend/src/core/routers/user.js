import { Router, request, response } from "express";
import { findAll, findOne } from "../controllers/users/get";
import DeleteUser from "../controllers/users/delete";

const router_usuario = Router();

router_usuario.get("/", findAll);
router_usuario.get("/:id", findOne);
router_usuario.delete("/delete/:id", DeleteUser);
// router_usuario.get("/", GetUsuarios);
// router_usuario.get("/", GetUsuarios);

export default router_usuario;
