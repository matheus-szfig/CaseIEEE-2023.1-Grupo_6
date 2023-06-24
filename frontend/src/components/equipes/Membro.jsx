import { useRecoilState } from "recoil";

import { equipeSelected } from "./EquipesTab";

export default function MemberComponent({ id, nome, cargos }) {
  const [selected, setSelected] = useRecoilState(equipeSelected);

  return (
    <div className={"mb-1 flex flex-col px-4 border rounded bg-primary"}>
      <div className="pt-2 pb-1 flex w-[100%] h-[100%]">
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-medium text-white mt-1">{nome}</h4>
        </div>
      </div>
      <div className="border-2 rounded mb-3 mt-1">
        {cargos
          .filter((c) => c.id_equipe === parseInt(selected) && !!c.aprovado)
          .map((c, i) => {
            return (
              <div
                key={c.id_equipe + "_" + c.id_cargo}
                className={`flex justify-between px-2.5 py-2
							${!!c.aprovado ? "bg-primary" : "bg-primary-light"}
							${!!(i !== 0) ? "border-t-2" : ""}`}
              >
                <h4 className={"text-md font-medium text-white"}>{c.cargo}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}
