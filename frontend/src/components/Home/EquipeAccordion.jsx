import { useCallback, useEffect, useState } from "react";
import UseApi from "../../hooks/useApi";
import { atom, useRecoilState } from "recoil";
import { toast } from "react-toastify";
import Member, { userVotoAtom } from "./Member";
import "../../styles/homeAnimations.css";

export const userVotoAt = userVotoAtom;

export const equipeVotoAtom = atom({
  key: "equipesVoto",
  default: [],
});

export default function EquipeAccordion({ id, nome, members }) {
  const [equipeMembers, setEquipeMembers] = useState([]);
  const [open, setOpen] = useState(false);

  const [equipeVotos, setEquipeVotos] = useRecoilState(equipeVotoAtom);

  const api = useCallback(UseApi, [])();

  async function FetchMembers() {
    const filtered_members = members
      ?.filter((v) =>
        v.cargos
          .filter((c) => c.aprovado)
          .map((c) => parseInt(c.id_equipe))
          .includes(parseInt(id))
      )
      .map((u) => ({
        id: u.id,
        nome: u.nome,
        cargos: u.cargos
          .filter((c) => parseInt(c.id_equipe) === parseInt(id))
          .map((c) => c.cargo)
          .toString()
          .replace(/\,/, ", "),
      }));

    setEquipeMembers(filtered_members);
  }

  function CheckEquipe(e) {
    console.log(e.target.checked);
    if (e.target.checked && equipeVotos.length >= 3) {
      toast.warning("Já existem 3 equipes marcadas para voto!");
      return;
    }

    if (e.target.checked) {
      const newArr = [...equipeVotos, id];
      setEquipeVotos(newArr);
    } else {
      const newArr = [...equipeVotos];
      newArr.splice(newArr.indexOf(id), 1);
      setEquipeVotos(newArr);
    }
  }

  useEffect(() => {
    FetchMembers();
  }, [members]);

  return (
    <>
      <div
        className={`w-full h-50 mb-1 bg-primary rounded flex flex-col text-white`}
      >
        <div className="flex justify-between">
          <div
            className="flex flex-col justify-center w-full ps-4 py-2 hover:cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          >
            <div className="flex">
              <div className="flex flex-col justify-center me-3 border-e pe-3">
                <h1 className="text-lg">{!open ? ">" : "v"}</h1>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-md">{nome}</h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center whitespace-nowrap">
              <h1>{(equipeMembers?.length || 0) + " membros"}</h1>
            </div>
            <div className="flex flex-col justify-center">
              <input
                onClick={CheckEquipe}
                checked={equipeVotos.includes(id)}
                className="hover:cursor-pointer ms-3 me-4 w-5 h-5 bg-gray-100 text-yellow-400 border-gray-300 rounded-full focus:ring-yellow-400 focus:color-yellow-400 focus:ring-2"
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="equipeMembros" className={`px-5 ${open ? "active" : ""}`}>
        {equipeMembers?.map((u) => {
          return (
            <Member
              key={u.id + u.cargos}
              id={u.id}
              nome={u.nome}
              cargoString={u.cargos}
            />
          );
        })}
      </div>
    </>
  );
}
