import { useCallback, useEffect, useState } from "react";

import UseApi from "../../hooks/useApi";
import { atom, useRecoilState } from "recoil";
import { equipeSelected } from "./EquipesTab";
import MemberComponent from "./Membro";

function getParams(v) {
	let params = new URL(document.location).searchParams;

	return params.get(v);
}

export default function MembrosTab() {
	const api = useCallback(UseApi, [])();

	const [listMembros, setListMembros] = useState([]);
	const [equipeSel, setEquipeSelected] = useRecoilState(equipeSelected);

	const [equipeMembros, setEquipeMembros] = useState([]);

	async function LoadResources() {
		const { data } = await api.get("/user");
		setListMembros(data);
	}

	useEffect(() => {
		const members = listMembros.filter((v) => {
			for (let i = 0; i < 3; i++) {
				if (v.cargos[i]?.id_equipe === parseInt(equipeSel)) {
					return true;
				}
			}
			return false;
		});

		setEquipeMembros(members);
	}, [equipeSel]);

	useEffect(() => {
		const idEquipe = getParams("idEquipe");
		if (idEquipe) {
			setEquipeSelected(idEquipe);

			const members = listMembros.filter((v) => {
				for (let i = 0; i < 3; i++) {
					if (v.cargos[i]?.id_equipe === parseInt(equipeSel)) {
						return true;
					}
				}
				return false;
			});

			setEquipeMembros(members);
		}
	}, [listMembros]);

	useEffect(() => {
		LoadResources();
	}, []);

	return (
		<div className="rounded border border-light-gray p-3 shadow-md w-[100%] md:w-2/4 lg:w-2/3 xl:w-3/4 md:me-1 mb-5">
			<div className="w-[100%] flex justify-between px-4 pb-2">
				<h3 className="mt-1 text-xl text-primary font-medium">Membros</h3>
			</div>
			<div className="max-h-[55vh] md:max-h-[70vh] overflow-y-auto border-t mx-4">
				<div className="flex flex-col justify-center mt-2 pb-2 mx-2">
					{equipeMembros.map((e) => {
						return (
							<MemberComponent
								key={e.id}
								nome={e.nome}
								id={e.id}
								cargos={e.cargos || []}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
