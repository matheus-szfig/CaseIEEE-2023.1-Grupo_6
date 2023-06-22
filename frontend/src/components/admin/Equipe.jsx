import { useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import EditBtn from "../profile/EditButton";
import { equipeSelected } from "./EquipesTab";
import { useEffect } from "react";
import {
  equipeUpdateAtom,
  updateEquipesModalShowAtom,
} from "./ModalUpdateEquipe";
import {
  deleteEquipesModalShowAtom,
  equipeDeleteAtom,
} from "./ModalDeleteEquipe";

export default function EquipeComponent({ id, nome, buttonDisabled }) {
  const [selected, setSelected] = useRecoilState(equipeSelected);
  const [_ue, setUpdatedEquipe] = useRecoilState(equipeUpdateAtom);
  const [_u, setUpdatingEquipe] = useRecoilState(updateEquipesModalShowAtom);
  const [_de, setDeletedEquipe] = useRecoilState(equipeDeleteAtom);
  const [_d, setDeletingEquipe] = useRecoilState(deleteEquipesModalShowAtom);

  function setParams(param, value) {
    let params = new URL(document.location).searchParams;

    params.set(param, value);

    window.history.replaceState(
      "",
      document.title,
      document.location.pathname + `?${params.toString()}`
    );
  }

  function UpdateEquipe(e, id_equipe) {
    e.preventDefault();
    setUpdatingEquipe(true);
    setUpdatedEquipe({ id_equipe });
  }
  function DeleteEquipe(e, id_equipe) {
    e.preventDefault();
    setDeletingEquipe(true);
    setDeletedEquipe({ id_equipe });
  }

  return (
    <div
      className={
        "mb-1 flex px-3 border rounded " +
        (!!(id === parseInt(selected)) ? "bg-primary" : "bg-primary-light")
      }
    >
      <div
        className="mb-1 py-3 flex w-[100%] h-[100%] hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setParams("idEquipe", id);
          setSelected(id);
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl font-medium text-white mt-1">{nome}</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center py-3">
        {!buttonDisabled ? (
          <div className="flex">
            <EditBtn
              onClick={(e) => UpdateEquipe(e, id)}
              className="bg-white hover:bg-gray-300 rounded h-8 w-8 font-bold hover:text-white text-primary me-2"
            />
            <CancelBtn
              onClick={(e) => DeleteEquipe(e, id)}
              className="bg-white hover:bg-gray-300 rounded h-8 w-8 font-bold hover:text-white text-primary"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
