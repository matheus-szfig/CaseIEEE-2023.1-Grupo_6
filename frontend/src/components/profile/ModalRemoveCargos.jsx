import { atom, useRecoilState } from "recoil";
import CancelBtn from "./CancelButton";
import UseApi from "../../hooks/useApi";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const removeCargosModalShowAtom = atom({
  key:'removeCargosModalShow',
  default:false
});

export const cargoRemovingAtom = atom({
  key:'cargoRemoving',
  default:false
});

export default function ModalRemoveCargos () {

  const navigate = useNavigate();
  const api = useCallback(UseApi, [])();

  const [show, setShow] = useRecoilState(removeCargosModalShowAtom);
  const [cargo, setCargo] = useRecoilState(cargoRemovingAtom);

  async function RemoveCargo (e) {
    e.preventDefault();

    try{
      const prom = new Promise(async (exec, reject) => {

        try{
          
          const resp = await api.post('/cargo/take', cargo);

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
        pending:'Removendo...',
        success:'Cargo removido com sucesso!'
      });

      await prom;
      setTimeout(() => navigate(0), 1000);
    }catch(e){
      toast.warning(e);
    }

  }

  return !!show ? (
    <>
      <div id="modal-background" className="absolute bg-black w-[100%] h-[100%] opacity-60 z-10"
      onClick={(e) => {
        e.preventDefault();
        setShow(false);
        setCargo(false);
      }}/>
      <div className="flex justify-center">
        <div id="modal-body" className="absolute w-[90vw] sm:w-[25rem] z-20 bg-white p-5 rounded mt-20">
          <div id="modal-header" className="flex justify-between border-b w-[100%]">
            <h3 className="font-bold text-primary text-2xl py-2">Remover Cargo</h3>
            <CancelBtn className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 my-1 px-3.5 outline outline-4 -outline-offset-4 outline-primary rounded'
              onClick={(e) => {
                e.preventDefault();
                setShow(false);
                setCargo(false);
              }}
            />
          </div>
          <form className="mt-3 w-[100%] flex flex-col" onSubmit={RemoveCargo}>
            <p className="text-md">Realmente deseja remover esse cargo? Essa ação é permanente e caso adicione o cargo novamente, o administrador precisará aprovar.</p>
            <button className='mt-5 bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded'
            type="submit">Remover</button>
          </form>
        </div>
      </div>
    </>
  ) : null;
}