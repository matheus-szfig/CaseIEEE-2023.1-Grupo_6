import React from "react";
import Navbar from "../components/Navbar";
import EquipesTab from "../components/equipes/EquipesTab";
import MembrosTab from "../components/equipes/MembrosTab";

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='mx-5 mt-10 sm:mx-[4.5rem]'>
          <h1 className='text-3xl font-bold text-primary'>Painel de Equipes</h1>
          <div className='mt-6 block md:flex'>
            <EquipesTab />
            <MembrosTab />
          </div>
        </div>
    </>
  );
}

export default Home;
