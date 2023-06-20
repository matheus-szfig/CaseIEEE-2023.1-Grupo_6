import { useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import EditBtn from "../profile/EditButton";
import { equipeSelected } from "./EquipesTab";
import { useEffect } from "react";
import { removeCargosModalShowAtom, cargoRemovingAtom } from "../profile/ModalRemoveCargos"

export default function MemberComponent({ id, nome, cargos }) {
	const [selected, setSelected] = useRecoilState(equipeSelected);

  const [_c, setCargo] = useRecoilState(cargoRemovingAtom);
  const [_r, setRemovingCargo] = useRecoilState(removeCargosModalShowAtom);

  function RemoveCargo (e, id_usuario, id_equipe, id_cargo) {
    e.preventDefault();
    setRemovingCargo(true);
    setCargo({id_usuario, id_equipe, id_cargo});
  }
	return (
		<div className={"mb-1 flex flex-col px-4 border rounded bg-primary"}>
			<div className="pt-2 pb-1 flex w-[100%] h-[100%]">
				<div className="flex flex-col justify-center">
					<h4 className="text-xl font-medium text-white mt-1">{nome}</h4>
				</div>
			</div>
			<div className="border-2 rounded mb-3 mt-1">
				{cargos
					.filter((c) => c.id_equipe === parseInt(selected))
					.map((c, i) => {
						return (
							<div
								className={`flex justify-between px-2.5 py-2
              ${!!c.aprovado ? "bg-primary" : "bg-primary-light"}
              ${!!(i !== 0) ? "border-t" : ""}`}
							>
								<h4 className={"text-md font-medium text-white"}>{c.cargo}</h4>
                {!c.aprovado ? "componente botao" : null}
								<CancelBtn onClick={(e)=>RemoveCargo(e, id, c.id_equipe, c.id_cargo)} className="bg-white hover:bg-gray-300 rounded w-6  font-bold hover:text-white text-primary" />
							</div>
						);
					})}
			</div>
		</div>
	);
}
