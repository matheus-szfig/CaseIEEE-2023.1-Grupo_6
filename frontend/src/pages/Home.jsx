import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/stylesHome.css";
import "../components/Home/verificaVotacaoButton";
import useApi from "../hooks/useApi";

const Home = () => {
  const [votacoes, setVotacoes] = useState([]);
  const api = useCallback(useApi, [])();

  async function votacao() {
    const resp = await api.get("/votacao");
    setVotacoes(resp.data);
  }

  useEffect(() => {
    votacao();
    console.log(votacoes);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <span>Home</span>
        </header>
        <div className="verificaVotoContainer">
          <span> Votações</span>
          <div className="insideVerificaVotoContainer">
            {votacoes.map((_, i) => {
              return !votacoes[i] ? (
                <verificaVotacao
                  id={votacoes[i].id}
                  title={votacoes[i].titulo}
                  dataInicio={votacoes[i].data_inicio}
                  dataFim={votacoes[i].data_fim}
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
