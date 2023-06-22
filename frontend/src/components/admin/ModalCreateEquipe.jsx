import { atom, useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import UseApi from "../../hooks/useApi";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const createEquipesModalShowAtom = atom({
  key: "createEquipesModalShow",
  default: false,
});

export const equipeCreatingAtom = atom({
  key: "equipeCreate",
  default: false,
});

export default function ModalCreateEquipes({ text }) {
  const navigate = useNavigate();
  const api = useCallback(UseApi, [])();

  const [show, setShow] = useRecoilState(createEquipesModalShowAtom);
  const [equipe, setEquipe] = useRecoilState(equipeCreatingAtom);
  const [equipeNome, setEquipeNome] = useState("");

  async function createEquipe(e) {
    e.preventDefault();

    try {
      const prom = new Promise(async (exec, reject) => {
        try {
          const resp = await api.post("/equipe/create", {
            nome: equipeNome,
          });

          if (!resp.data.status) {
            reject(resp.data.message);
          } else {
            exec(resp.data);
          }
        } catch (e) {
          reject(e.message);
        }
      });

      toast.promise(prom, {
        pending: "Criando...",
        success: "Equipe criada com sucesso!",
      });

      await prom;
      setTimeout(() => navigate(0), 1000);
    } catch (e) {
      toast.warning(e);
    }
  }

  return !!show ? (
    <>
      <div className="fixed top-0 left-0  w-screen h-screen z-10">
        <div
          className="absolute bg-black opacity-60 w-full h-full"
          onClick={() => {
            setShow(false);
            setEquipe(false);
          }}
        ></div>

        <div className="flex justify-center">
          <div
            id="modal-body"
            className="absolute w-[90vw] sm:w-[25rem] z-20 bg-white p-5 rounded mt-20"
          >
            <div
              id="modal-header"
              className="flex justify-between border-b w-[100%]"
            >
              <h3 className="font-bold text-primary text-2xl py-2">
                Aprovar Equipe
              </h3>
              <CancelBtn
                className="bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 my-1 px-3.5 outline outline-4 -outline-offset-4 outline-primary rounded"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                  setEquipe(false);
                }}
              />
            </div>
            <form className="mt-3 w-full flex flex-col" onSubmit={createEquipe}>
              {/* <p className="text-md">{text}</p> */}
              <label htmlFor="nome" className="text-md">
                Nome da equipe:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={equipeNome}
                onChange={(e) => setEquipeNome(e.target.value)}
                className="mt-1 px-2 py-1 border border-gray-300 rounded"
              />
              <button
                className="mt-5 bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded"
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
