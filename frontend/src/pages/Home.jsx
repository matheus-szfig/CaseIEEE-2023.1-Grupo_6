import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VerificaVotacao from "../components/Home/verificaVotacaoButton";
import useApi from "../hooks/useApi";
import EquipeAccordion, {
  equipeVotoAtom,
  userVotoAt
} from "../components/Home/EquipeAccordion";
import { useRecoilState } from "recoil";

const Home = () => {
  const [votacoes, setVotacoes] = useState([]);
  const [users, setUsers] = useState([]);
  const [equipes, setEquipes] = useState([]);

  const [votacaoSel, setVotacaoSel] = useState(0);

  const [equipeVotos, setEquipeVotos] = useRecoilState(equipeVotoAtom);
  const [userVotos, setUserVotos] = useRecoilState(userVotoAt);

  const api = useCallback(useApi, [])();

  async function loadVotacao() {
    const votacoes = await api.get("/votacao");
    const users = await api.get('/user');
    const equipes = await api.get('/equipe');

    const vts = votacoes.data.sort((a, b) => {
      return parseInt(b.id)-parseInt(a.id);
    })

    setEquipes(equipes?.data?.equipes);
    setUsers(users.data);
    setVotacoes(vts);
  }

  async function Votar(e) {
    e.preventDefault();
    
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

          <div className="flex flex-col p-2 md:max-h-[70vh] w-full md:w-2/5 lg:w-1/3 xl:w-1/4 border rounded pb-1 md:me-1 shadow-md">
            {votacoes.map((_, i) => {
                return <VerificaVotacao
                  id={votacoes[i].id}
                  title={votacoes[i].titulo}
                  dataInicio={votacoes[i].data_inicio}
                  dataFim={votacoes[i].data_fim}
                  selected={i === parseInt(votacaoSel)}
                  onClick={(e) => {
                    e.preventDefault();
                    setVotacaoSel(i);
                  }}
                />;
            })}
          </div>

          <div className="flex flex-col p-2 w-full md:h-[70vh] md:w-3/5 lg:w-2/3 xl:w-3/4 border rounded pb-1 md:ms-1 mt-3 md:mt-0 shadow-md overflow-y-auto">
            { 
            !votacoes[votacaoSel]?.data_fim ?
              equipes.map(e => {
                return <EquipeAccordion id={e.id} nome={e.nome} members={users}/>
              })
              : null
            }
          </div>

        </div>
      </div>
    </>
  );
};
export default Home;
