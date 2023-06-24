import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthComponent } from "../components/Auth";
import EquipesTab from "../components/admin/EquipesTab";
import MembrosTab from "../components/admin/MembrosTab";
import ModalRemoveCargos from "../components/profile/ModalRemoveCargos";
import ModalApproveCargos from "../components/admin/ModalApproveCargos";
import ModalUpdateEquipes from "../components/admin/ModalUpdateEquipe";
import ModalDeleteEquipes from "../components/admin/ModalDeleteEquipe";
import ModalCreateEquipes from "../components/admin/ModalCreateEquipe";
import ModalDeleteUser from "../components/admin/ModalDeleteUser";
import UseApi from "../hooks/useApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const [votAberta, setVotacaoAberta] = useState(null);
  const api = useCallback(UseApi, [])()
  const navigate = useNavigate();

  async function LoadRes () {
    const votacoes = await api.get("/votacao");
    const votAb = votacoes?.data?.find(v => !v.data_fim);
    setVotacaoAberta(votAb?.id ||  null);
  }

  async function AbrirVotacao (e) {
    e.preventDefault();
    try{
      const result = api.post("/votacao/create");
      toast.promise(result, {
        success:"Votação aberta com sucesso!",
        error:"Não foi possível completar sua solicitação!"
      })
      await result;
      setTimeout(() => navigate(0), 1000);
    }catch(e){}
  }

  async function FecharVotacao (e) {
    e.preventDefault();
    try{
      const result = api.patch("/votacao/update", {id:votAberta});
      toast.promise(result, {
        success:"Votação fechada com sucesso!",
        error:"Não foi possível completar sua solicitação!"
      })
      await result;
      setTimeout(() => navigate(0), 1000);
    }catch(e){}
  }

  useEffect(() => {
    LoadRes();
  }, [])

  return (
    <AuthComponent permissions={["admin"]} redirect={"/"}>
      <ModalRemoveCargos text="Deseja realmente apagar o cargo deste usuário?" />
      <ModalApproveCargos text={"Deseja aprovar o cargo deste usuário?"} />
      <ModalUpdateEquipes />
      <ModalCreateEquipes />
      <ModalDeleteUser text={"Deseja deletar este usuário?"} />
      <ModalDeleteEquipes text={"Deseja deletar esta equipe?"} />
      <Navbar />
      <div className="mx-5 mt-10 sm:mx-[4.5rem]">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-primary">
            Painel de Administrador
          </h1>

          {
            !votAberta ?
            <button className=" bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-primary rounded mb-10"
            onClick={AbrirVotacao}>
              Abrir Votação
            </button> :
            <button className=" bg-gray-100 hover:bg-red-600 hover:text-white text-red-600 font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-red-600 rounded mb-10"
            onClick={FecharVotacao}>
              Fechar Votação
            </button>
          }
          
        </div>
        <div className="mt-6 block md:flex">
          <EquipesTab />
          <MembrosTab />
        </div>
      </div>
    </AuthComponent>
  );
};

export default Admin;
