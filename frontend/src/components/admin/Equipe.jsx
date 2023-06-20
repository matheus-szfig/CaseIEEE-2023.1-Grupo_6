import { useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import EditBtn from "../profile/EditButton";
import { equipeSelected } from "./EquipesTab";
import { useEffect } from "react";

export default function EquipeComponent ({id, nome}) {

  const [selected, setSelected] = useRecoilState(equipeSelected);

  return (
    <div className={"mb-1 flex px-3 border rounded " + (!!(id === parseInt(selected)) ? 'bg-primary' : 'bg-primary-light')}>
      <div className="mb-1 py-3 flex w-[100%] h-[100%] hover:cursor-pointer" onClick={(e) => {
        e.preventDefault();
        setSelected(id);
      }}>
        <div className='flex flex-col justify-center items-center'>
          <h4 className='text-xl font-medium text-white mt-1'>{nome}</h4>
        </div>
        
      </div>
      <div className='flex flex-col justify-center py-3'>
          <div className="flex">
            <EditBtn className="bg-white hover:bg-gray-300 rounded h-8 w-8 font-bold hover:text-white text-primary me-2" />
            <CancelBtn className="bg-white hover:bg-gray-300 rounded h-8 w-8 font-bold hover:text-white text-primary" />
          </div>
        </div>
    </div>
    
  )
}