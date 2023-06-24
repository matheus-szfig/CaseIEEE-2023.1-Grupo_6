import { useCallback, useEffect, useState } from "react";
import UseApi from "../../hooks/useApi";
import VelaGraph from "./VelaGraph";

export default function GraphResult({ votacao }) {
  const [votosUsuarios, setVotosUsuarios] = useState([]);
  const [votosEquipes, setVotosEquipes] = useState([]);

  const api = useCallback(UseApi, [])();

  async function getVotacaoData() {
    const votos = await api.get("/votacao/" + votacao?.id);

    const vUsers = votos?.data?.usuarios
      ?.sort((a, b) => {
        return parseInt(b.qnt) - parseInt(a.qnt);
      })
      .splice(0, 3)
      .map((u, i) => ({ ...u, lugar: i }));

    let aux = vUsers[0];
    vUsers[0] = vUsers[1];
    vUsers[1] = aux;

    const vEquipes = votos?.data?.equipes
      ?.sort((a, b) => {
        return parseInt(b?.qnt) - parseInt(a?.qnt);
      })
      .splice(0, 3)
      .map((e, i) => ({ ...e, lugar: i }));

    aux = vEquipes[0];
    vEquipes[0] = vEquipes[1];
    vEquipes[1] = aux;

    setVotosUsuarios(vUsers);
    setVotosEquipes(vEquipes);
  }

  useEffect(() => {
    getVotacaoData();
  }, [votacao]);

  function getColor(lugar) {
    const mapColor = ["bg-graph-fst", "bg-graph-scd", "bg-graph-trd"];
    return mapColor[lugar];
  }

  function getSize(lugar) {
    const mapSize = ["h-[200px]", "h-[115px]", "h-[65px]"];
    return mapSize[lugar];
  }

  return (
    <div className="flex flex-col md:flex-row justify-between h-full gap-5">
      <div className="flex flex-col w-full justify-between md:pb-[10rem] md:ps-3">
        <div className="flex h-1/5 text-lg text-primary-dark font-medium">
          Equipes
        </div>

        <div className="flex w-full gap-1">
          {votosEquipes?.map((e) => {
            return (
              <VelaGraph
                nome={e?.nome}
                cor={getColor(e?.lugar)}
                tamanho={getSize(e?.lugar)}
                qnt={e?.qnt}
                key={"e" + e?.id_equipe}
              />
            );
          })}
        </div>
      </div>
      <div className="h-[1px] md:h-[100%] md:w-[1px] bg-gray" />

      <div className="flex flex-col w-full justify-between md:pb-[10rem] md:pe-3">
        <div className="flex h-1/5 md:justify-end text-lg text-primary-dark font-medium">
          Membros
        </div>

        <div className="flex w-full gap-1">
          {votosUsuarios.map((u) => {
            return (
              <VelaGraph
                nome={u?.nome.split(" ")[0]}
                cor={getColor(u?.lugar)}
                tamanho={getSize(u?.lugar)}
                qnt={u?.qnt}
                key={"u" + u?.id_usuario}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
