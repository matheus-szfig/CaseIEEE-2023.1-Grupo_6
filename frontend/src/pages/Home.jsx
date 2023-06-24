import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState, useCallback } from "react";
import VerificaVotacao from "../components/Home/verificaVotacaoButton";
import useApi from "../hooks/useApi";
import EquipeAccordion, {
  equipeVotoAtom,
  userVotoAt,
} from "../components/Home/EquipeAccordion";
import { useRecoilState, useRecoilValue } from "recoil";
import { authInfo as authInfoSelector, authReady } from "../components/Auth";
import { toast } from "react-toastify";
import GraphResult from "../components/Home/GraphResult";

const Home = () => {
  const [votacoes, setVotacoes] = useState([]);
  const [users, setUsers] = useState([]);
  const [equipes, setEquipes] = useState([]);

  const [votacaoSel, setVotacaoSel] = useState(0);

  const [equipeVotos, setEquipeVotos] = useRecoilState(equipeVotoAtom);
  const [userVotos, setUserVotos] = useRecoilState(userVotoAt);

  const userInfo = useRecoilValue(authInfoSelector);
  const isReady = useRecoilValue(authReady);

  const api = useCallback(useApi, [])();

  async function loadVotacao() {
    const votacoes = await api.get("/votacao");
    const vts = votacoes.data.sort((a, b) => {
      return parseInt(b.id) - parseInt(a.id);
    });
    setVotacoes(vts);

    const equipes = await api.get("/equipe");
    setEquipes(equipes?.data?.equipes);

    const users = await api.get("/user");
    setUsers(users.data);

    const votos = await api.get("/voto");
    setEquipeVotos(votos.data.equipe);
    setUserVotos(votos.data.user);
  }

  async function Votar(e) {
    e.preventDefault();

    const resp = api.post("/voto", {
      equipes: equipeVotos,
      usuarios: userVotos,
    });

    try {
      toast.promise(resp, {
        success: "Votos realizados!",
        error:
          "Houve um problema ao realizar seus votos! Tente novamente mais tarde.",
      });
      await resp;
    } catch (e) {}
  }

  useEffect(() => {
    loadVotacao();
    console.log(votacoes);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-5 mt-10 sm:mx-[4.5rem]">
        <h1 className="text-3xl font-bold text-primary">Votações</h1>
        <div className="flex flex-col md:flex-row mt-5 w-full">
          <div className="flex flex-col p-2 md:max-h-[65vh] w-full md:w-2/5 lg:w-1/3 xl:w-1/4 border rounded pb-1 md:me-1 shadow-md">
            {votacoes.map((_, i) => {
              return (
                <VerificaVotacao
                  id={votacoes[i].id}
                  title={votacoes[i].titulo}
                  dataInicio={votacoes[i].data_inicio}
                  dataFim={votacoes[i].data_fim}
                  selected={i === parseInt(votacaoSel)}
                  onClick={(e) => {
                    e.preventDefault();
                    setVotacaoSel(i);
                  }}
                />
              );
            })}
          </div>

          <div className="flex flex-col p-2 w-full md:h-[65vh] md:w-3/5 lg:w-2/3 xl:w-3/4 border rounded pb-1 md:ms-1 mt-3 md:mt-0 shadow-md overflow-y-auto">
            {(userInfo.id && isReady) || !!votacoes[votacaoSel]?.data_fim ? (
              !votacoes[votacaoSel]?.data_fim ? (
                equipes.map((e) => {
                  return (
                    <EquipeAccordion id={e.id} nome={e.nome} members={users} />
                  );
                })
              ) : (
                <GraphResult votacao={votacoes[votacaoSel]} />
              )
            ) : (
              <div className="flex justify-center py-10">
                <span className="w-3/5 text-center font-bold text-2xl text-primary-light">
                  Você precisa estar logado para votar!
                  <br />
                  <a className="hover:text-primary underline" href="/login">
                    Clique aqui
                  </a>{" "}
                  para logar.
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse pt-3">
          {userInfo.id && isReady && !votacoes[votacaoSel]?.data_fim ? (
            <button
              className="bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-primary rounded"
              onClick={Votar}
            >
              Salvar
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Home;
