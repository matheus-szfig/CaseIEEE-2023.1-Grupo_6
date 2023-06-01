import { Router, request, response } from "express";
import { findAll, findOne } from "../controllers/users/get";
import DeleteUser from "../controllers/users/delete";
import Authorize from "../middlewares/authorization";
import UpdateUser from "../controllers/users/update";

const router_usuario = Router();

router_usuario.get("/", findAll);
router_usuario.get("/:id", findOne);
router_usuario.delete("/delete/:id", Authorize(['admin'], {type:'params', key:'id'}) ,DeleteUser);
router_usuario.patch("/update/:id",UpdateUser);

export default router_usuario;
