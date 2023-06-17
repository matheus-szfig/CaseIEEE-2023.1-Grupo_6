import { request, response } from "express";
import { createCargoService } from "../../service/cargo/create";

export async function createCargo(req = request, res = response) {
    const {nome} = req.body;
    try { 
        const createCargo = await createCargoService(nome);
        res.json(createCargo);
    } catch (error) {
        console.error('Erro ao criar cargo:', error);
        res.status(500).json({ error: 'Erro ao criar cargo' });
      }
}

