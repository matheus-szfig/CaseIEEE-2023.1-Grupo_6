import { useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import EditBtn from "../profile/EditButton";
import { equipeSelected } from "./EquipesTab";
import { useEffect } from "react";
import { removeCargosModalShowAtom, cargoRemovingAtom } from "../profile/ModalRemoveCargos"
import { approveCargosModalShowAtom, cargoApprovingAtom } from "./ModalApproveCargos"
import ApproveBtn from "./ApproveButton";

export default function MemberComponent({ id, nome, cargos }) {
	const [selected, setSelected] = useRecoilState(equipeSelected);

  const [_rc, setRemovedCargo] = useRecoilState(cargoRemovingAtom);
  const [_ac, setApprovedCargo] = useRecoilState(cargoApprovingAtom);
  const [_r, setRemovingCargo] = useRecoilState(removeCargosModalShowAtom);
  const [_a, setApprovingCargo] = useRecoilState(approveCargosModalShowAtom);

  function RemoveCargo (e, id_usuario, id_equipe, id_cargo) {
    e.preventDefault();
    setRemovingCargo(true);
    setRemovedCargo({id_usuario, id_equipe, id_cargo});
  }
  function ApproveCargo (e, id_usuario, id_equipe, id_cargo) {
    e.preventDefault();
    setApprovingCargo(true);
    setApprovedCargo({id_usuario, id_equipe, id_cargo});
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
								key={c.id_equipe}
								className={`flex justify-between px-2.5 py-2
              ${!!c.aprovado ? "bg-primary" : "bg-primary-light"}
              ${!!(i !== 0) ? "border-t" : ""}`}
							>
								<h4 className={"text-md font-medium text-white"}>{c.cargo}</h4>
                				<div >
									{!c.aprovado ?
										<ApproveBtn onClick={(e)=>ApproveCargo(e, id, c.id_equipe, c.id_cargo)} className="mr-2 bg-white hover:bg-gray-300 rounded w-6  font-bold hover:text-white text-primary"/>
									: null}
									<CancelBtn onClick={(e)=>RemoveCargo(e, id, c.id_equipe, c.id_cargo)} className="bg-white hover:bg-gray-300 rounded w-6  font-bold hover:text-white text-primary" />
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
