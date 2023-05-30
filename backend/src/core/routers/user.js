import { Router } from "express";
import GetUsers from "../controllers/users/get";
import DeleteUser from "../controllers/users/delete";
import LoginUser from "../controllers/users/loginController";

const router_usuario = Router();

router_usuario.get("/", GetUsers);
router_usuario.delete("/delete/:id", DeleteUser);
router_usuario.post("/login", LoginUser);

export default router_usuario;

