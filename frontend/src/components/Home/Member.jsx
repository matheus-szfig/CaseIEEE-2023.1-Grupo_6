import { useCallback, useEffect, useState } from "react";
import UseApi from "../../hooks/useApi";
import { atom, useRecoilState } from "recoil";
import { toast } from "react-toastify";

export const userVotoAtom = atom({
  key: "userVoto",
  default: [],
});

export default function Member({ id, nome, cargoString }) {
  const [membroVotos, setMembroVotos] = useRecoilState(userVotoAtom);

  function CheckMembro(e) {
    console.log(e.target.checked);
    if (e.target.checked && membroVotos.length >= 3) {
      toast.warning("Já existem 3 membros marcadas para voto!");
      return;
    }

    if (e.target.checked) {
      const newArr = [...membroVotos, id];
      setMembroVotos(newArr);
    } else {
      const newArr = [...membroVotos];
      newArr.splice(newArr.indexOf(id), 1);
      setMembroVotos(newArr);
    }
  }

  return (
    <div
      className={`w-full h-50 mb-1 bg-primary-light rounded flex text-white justify-between py-1 ps-4`}
    >
      <div className="flex flex-col">
        <span className="font-medium text-lg">{nome}</span>
        <span className="text-md">{cargoString}</span>
      </div>
      <div className="flex flex-col justify-center">
        <input
          onClick={CheckMembro}
          checked={membroVotos.includes(id)}
          className="hover:cursor-pointer ms-3 me-4 w-5 h-5 bg-gray-100 text-yellow-400 border-gray-300 rounded-full focus:ring-yellow-400 focus:color-yellow-400 focus:ring-2"
          type="checkbox"
        />
      </div>
    </div>
  );
}
