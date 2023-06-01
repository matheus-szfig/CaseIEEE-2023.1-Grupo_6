import { Router, request, response } from "express";

import { findAll, findOne } from "../controllers/users/get";
import LoginUser from "../controllers/users/loginController";
import UpdateUser from "../controllers/users/update";
import DeleteUser from "../controllers/users/delete";
import CadastrateUser from "../controllers/users/cadastroController";

import Authorize from "../middlewares/authorization";

const router_usuario = Router();

router_usuario.get("/", findAll);
router_usuario.get("/:id", findOne);
router_usuario.post("/login", LoginUser);
router_usuario.patch("/update/:id",UpdateUser);
router_usuario.delete("/delete/:id", Authorize(['admin'], {type:'params', key:'id'}) ,DeleteUser);

export default router_usuario;

