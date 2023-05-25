
import { request, response } from "express";
import { deleteUserService } from "../service/users/delete";



export default async function DeleteUser(req = request, res = response) {
    const {id} = req.params
    const deleteService = await deleteUserService(id)
    res.json(deleteService)
}


