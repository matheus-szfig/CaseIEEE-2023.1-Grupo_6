import { Router, request, response } from "express";

import { findAll, findOne } from "../controllers/users/get";
import LoginUser from "../controllers/users/loginController";
import UpdateUser from "../controllers/users/update";
import DeleteUser from "../controllers/users/delete";
import CadastrateUser from "../controllers/users/cadastroController";

import Authorize from "../middlewares/authorization";
import AuthUser from "../controllers/users/auth";
import Authenticate from "../middlewares/authentication";

const router_usuario = Router();

// auth
router_usuario.get('/auth', Authenticate, AuthUser)

// gets
router_usuario.get("/", findAll);
router_usuario.get("/:id", findOne);

// login e cadastro
router_usuario.post("/login", LoginUser);
router_usuario.post("/cadaster", CadastrateUser);

// update
router_usuario.patch("/update/:id",UpdateUser);

// delete
// router_usuario.delete("/delete/:id", Authorize(['admin'], {type:'params', key:'id'}) ,DeleteUser);
router_usuario.delete("/delete/:id",DeleteUser);



export default router_usuario;

