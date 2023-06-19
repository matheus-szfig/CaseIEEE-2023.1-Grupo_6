import { atom, useRecoilState, useRecoilValue } from "recoil";
import CancelBtn from "./CancelButton";
import { useCallback, useEffect, useState } from "react";
import { authInfo } from "../Auth";
import { toast } from "react-toastify";
import UseApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

export const addCargosModalShowAtom = atom({
  key:'addCargosModalShow',
  default:false
});

export default function ModalAddCargos () {
  
  const navigate = useNavigate();
  const api = useCallback(UseApi, [])();

  const userInfo = useRecoilValue(authInfo);

  const [show, setShow] = useRecoilState(addCargosModalShowAtom);

  const [listEquipes, setListEquipes] = useState([]);
  const [listCargos, setListCargos] = useState([]);

  const [equipe, setEquipe] = useState(-1);
  const [cargo, setCargo] = useState(-1);

  async function AddCargo (e) {
    e.preventDefault();
    const id_usuario = userInfo.id;

    try{
      const prom = new Promise(async (exec, reject) => {

        try{
          
          const resp = await api.post('/cargo/give', {
            id_usuario,
            id_cargo:cargo,
            id_equipe:equipe
          })

          if(!resp.data.status){
            reject(resp.data.message);
          }else{
            exec(resp.data);
          }

        }catch(e){
          reject(e.message);
        }
  
      });

      toast.promise(prom, {
        pending:'Adicionando...',
        success:'Cargo adicionado com sucesso!'
      });

      await prom;
      setTimeout(() => navigate(0), 1000);
    }catch(e){
      toast.warning(e);
    }

  }

  async function LoadResources() {
    const cargoGet = await api.get('/cargo/get');
    const equipeGet = await api.get('/equipe');

    setListCargos(cargoGet.data.cargos);
    setListEquipes(equipeGet.data.equipes);

  }

  useEffect(() => {
    LoadResources();
  }, []);

  return !!show ? (
    <>
      <div id="modal-background" className="absolute bg-black w-[100%] h-[100%] opacity-60 z-10"
      onClick={(e) => setShow(false)}/>
      <div className="flex justify-center">
        <div id="modal-body" className="absolute w-[90vw] sm:w-[25rem] z-20 bg-white p-5 rounded mt-20">
          <div id="modal-header" className="flex justify-between border-b w-[100%]">
            <h3 className="font-bold text-primary text-2xl py-2">Adicionar Cargo</h3>
            <CancelBtn className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 my-1 px-3.5 outline outline-4 -outline-offset-4 outline-primary rounded'
              onClick={(e) => setShow(false)}
            />
          </div>
          <form className="mt-3 w-[100%] flex flex-col" onSubmit={AddCargo}>
            <select className="mt-3 text-lg w-[100%] rounded" onChange={e => setEquipe(parseInt(e.target.value))}>
              <option defaultValue value={-1}>Selecione uma equipe</option>
              {listEquipes.map(v => {
                return <option key={v.id} value={v.id}>{v.nome}</option>
              })}
            </select>
            <select className="mt-3 text-lg w-[100%] rounded" onChange={e => setCargo(parseInt(e.target.value))}>
              <option defaultValue value={-1}>Selecione um cargo</option>
              {listCargos.map(v => {
                return <option key={v.id} value={v.id}>{v.nome}</option>
              })}
            </select>
            <button className='mt-5 bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded'
            type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    </>
  ) : null;
}