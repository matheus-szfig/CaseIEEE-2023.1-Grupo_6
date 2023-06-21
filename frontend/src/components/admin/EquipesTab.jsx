import { useCallback, useEffect, useState } from "react";
import AddButton from "./AddButton";
import EquipeComponent from "./Equipe";
import UseApi from "../../hooks/useApi";
import { atom, useRecoilState } from "recoil";
import {
	createEquipesModalShowAtom,
	equipeCreatingAtom,
} from "./ModalCreateEquipe";

export const equipeSelected = atom({
	key: "equipeSelected",
	default: null,
});

export default function EquipesTab() {
	const api = useCallback(UseApi, [])();

	const [listEquipes, setListEquipes] = useState([]);
	const [selected, setSelected] = useRecoilState(equipeSelected);
	const [_ce, setCreatedEquipe] = useRecoilState(equipeCreatingAtom);
	const [_c, setCreatingEquipe] = useRecoilState(createEquipesModalShowAtom);
	async function LoadResources() {
		const equipeGet = await api.get("/equipe");
		setListEquipes(equipeGet.data.equipes);
	}

	useEffect(() => {
		LoadResources();
	}, []);

	function CreateEquipe(e) {
		e.preventDefault();
		setCreatingEquipe(true);
		setCreatedEquipe();
	}

	return (
		<div className="rounded border border-light-gray h-[100%] p-3 shadow-md w-[100%] md:w-2/4 lg:w-1/3 xl:w-1/4 md:me-1 mb-5">
			<div className="w-[100%] flex justify-between px-4 mb-2">
				<h3 className="mt-1 text-xl text-primary font-medium">Equipes</h3>
				<AddButton
					onClick={(e) => CreateEquipe(e)}
					className="bg-white hover:bg-primary border-2 border-primary rounded h-8 w-8 font-bold hover:text-white text-primary"
				/>
			</div>
			<div className="max-h-[55vh] md:max-h-[70vh] overflow-y-auto border-t mx-4">
				<div className="flex flex-col justify-center mt-2 pb-2 mx-2">
					{listEquipes.map((e) => {
						return <EquipeComponent key={e.id} nome={e.nome} id={e.id} />;
					})}
				</div>
			</div>
		</div>
	);
}
