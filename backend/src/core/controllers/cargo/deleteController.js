import { request, response } from "express";
import { deleteCargoService } from "../../service/cargo/delete";

export async function deleteCargo(req = request, res = response) {
    const cargoId = req.params.id;
    try {
        const cargo = await deleteCargoService(cargoId);
        if (!cargo) {
            return res.status(404).json({ error: 'Equipe não encontrada' });
        }
    } catch(error){
        console.error('Erro ao deletar cargo:', error);
        res.status(500).json({ error: 'Erro ao deletar cargo' });
    }
}

