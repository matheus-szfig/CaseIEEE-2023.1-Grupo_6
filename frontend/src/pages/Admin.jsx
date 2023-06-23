import React from "react";
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

const Home = () => {
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
          <button
            className=" bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-primary rounded mb-10"
          >Iniciar Votação</button>
        </div>
        <div className="mt-6 block md:flex">
          <EquipesTab />
          <MembrosTab />
        </div>
      </div>
    </AuthComponent>
  );
};

export default Home;
