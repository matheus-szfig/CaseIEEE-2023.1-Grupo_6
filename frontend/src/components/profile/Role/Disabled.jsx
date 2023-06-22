import { useRecoilState } from "recoil";
import CancelBtn from "../CancelButton";
import {
  removeCargosModalShowAtom,
  cargoRemovingAtom,
} from "../ModalRemoveCargos";

export default function DisabledRole({
  id_usuario,
  id_equipe,
  id_cargo,
  cargo,
  equipe,
  img,
}) {
  const [_c, setCargo] = useRecoilState(cargoRemovingAtom);
  const [_r, setRemovingCargo] = useRecoilState(removeCargosModalShowAtom);

  function RemoveCargo(e) {
    e.preventDefault();
    setRemovingCargo(true);
    setCargo({ id_usuario, id_equipe, id_cargo });
  }

  return (
    <div className={`p-2 bg-gray-500 rounded mt-1`}>
      <div className={`flex justify-between px-2 ${!cargo ? "opacity-0" : ""}`}>
        <div className="flex items-center">
          <img className="border rounded-full h-12 me-3" src={img} />
          <div className="flex flex-col justify-center">
            <h5 className="text-white font-medium text-lg">{equipe}</h5>
            <h6 className="text-white text-md font-light">{cargo}</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <CancelBtn
              className="bg-white hover:bg-gray-300 rounded h-8 w-8 font-bold hover:text-white text-primary"
              onClick={RemoveCargo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
