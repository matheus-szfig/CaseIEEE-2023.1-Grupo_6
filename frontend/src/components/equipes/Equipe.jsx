import { useRecoilState } from "recoil";

import { equipeSelected } from "./EquipesTab";

export default function EquipeComponent({ id, nome }) {
  const [selected, setSelected] = useRecoilState(equipeSelected);

  function setParams(param, value) {
    let params = new URL(document.location).searchParams;

    params.set(param, value);

    window.history.replaceState(
      "",
      document.title,
      document.location.pathname + `?${params.toString()}`
    );
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
      <div className="flex flex-col justify-center py-3"></div>
    </div>
  );
}
