import React from "react";
import Navbar from "../components/Navbar";
import { AuthComponent } from "../components/Auth";
import EquipesTab from "../components/admin/EquipesTab";
import MembrosTab from "../components/admin/MembrosTab";
import ModalRemoveCargos from "../components/profile/ModalRemoveCargos";
import ModalApproveCargos from "../components/admin/ModalApproveCargos";

const Home = () => {
  return (
    
    <AuthComponent permissions={['admin']} redirect={'/'}>
        <ModalRemoveCargos text="Deseja realmente apagar o cargo deste usuário?"/>
        <ModalApproveCargos text={"Deseja aprovar o cargo deste usuário?"}/>
        <Navbar/>
        <div className='mx-5 mt-10 sm:mx-[4.5rem]'>
          <h1 className='text-3xl font-bold text-primary'>Painel</h1>
          <div className='mt-6 block md:flex'>
            <EquipesTab />
            <MembrosTab />
          </div>
        </div>
    </AuthComponent>
  );
}

export default Home;
