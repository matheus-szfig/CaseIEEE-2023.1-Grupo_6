import { Router, request, response } from "express";

import { findAll, findOne } from "../controllers/users/get";
import LoginUser from "../controllers/users/loginController";
import UpdateUser from "../controllers/users/update";
import DeleteUser from "../controllers/users/delete";
import CadastrateUser from "../controllers/users/cadastroController";

import Authorize from "../middlewares/authorization";
import AuthUser from "../controllers/users/auth";
import Authenticate from "../middlewares/authentication";
import InactivateUser from "../controllers/users/inactivate";
import LogoutUser from "../controllers/users/logoutController";

import findAllvoto from "../controllers/users/getVotacao";
import create from "../controllers/users/criarVotacao";

const router_usuario = Router();

// auth
router_usuario.get("/auth", Authenticate, AuthUser);

// gets
router_usuario.get("/", findAll);
router_usuario.get("/", findOne);

// login e cadastro
router_usuario.post("/login", LoginUser);
router_usuario.post("/logout", LogoutUser);
router_usuario.post("/cadaster", CadastrateUser);

// update
router_usuario.patch(
  "/update/:id",
  Authenticate,
  Authorize(["admin"], ["params", "id"]),
  UpdateUser
);

// delete
router_usuario.delete(
  "/delete/:id",
  Authenticate,
  Authorize(["admin"], ["params", "id"]),
  DeleteUser
);
router_usuario.delete("/inactivate/:id", Authenticate, InactivateUser);

router_usuario.get("/votacao", findAllvoto);
router_usuario.post("/cadastervotacao", create);

export default router_usuario;
