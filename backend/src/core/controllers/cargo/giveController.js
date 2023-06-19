import { request, response } from "express";
import { giveCargoService } from "../../service/cargo/give";

export async function giveCargo(req = request, res = response) {
    const {
        id_usuario,
        id_equipe,
        id_cargo
    } = req.body;
    try { 
        const createCargo = await giveCargoService(id_usuario, id_equipe, id_cargo);
        res.json(createCargo);
    } catch (error) {
        console.error('Erro ao adicionar cargo:', error);
        res.status(500).json({ status:false, message:error.message });
      }
}

