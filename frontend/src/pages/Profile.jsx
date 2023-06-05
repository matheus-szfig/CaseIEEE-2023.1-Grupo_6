import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { AuthComponent } from '../components/Auth'
import { ActiveRole, DisabledRole, EmptyRole} from '../components/profile/Role/Index';
import PictureTab from '../components/profile/PictureTab'

const Profile = () => {

  const [cargos, setCargos] = useState([]);

  const [userInfo, setUserInfo] = useState({
    nome: "Matheus de Souza Figueiredo",
    email: "darkcorner.dev@gmail.com",
    notify:1
  });

  function LoadResources () {
    setCargos([]);
    // carrega os dados do usuário aqui
  }

  useEffect(() => {
    LoadResources ();
  }, []);

  return (
    <AuthComponent redirect={"/login"}>
        <Navbar/>
        <div className='mx-5 mt-10 sm:mx-[4.5rem]'>
          <h1 className='text-3xl font-bold text-primary'>Configurações</h1>
          <div className='mt-6 block md:flex'>

            <PictureTab nome={userInfo.nome} img={"https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg"}/>

            <div className='rounded border border-light-gray pt-7 px-10 shadow-md w-4/4 mt-5 md:mt-0 md:w-3/4 md:ms-10 mb-10'>
              <form>

                <h1 className='text-3xl text-primary font-bold'>Conta</h1>
                <div className='flex justify-between mt-5 border-b pb-8 border-gray-400'>
                  <div className='flex flex-inline flex-col w-[100%] pe-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="email">Email</label>
                    <input id="email" className='rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' name='email' type='text' disabled value={userInfo.email}/>
                  </div>
                  <div className='flex flex-inline flex-col w-[100%] ps-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="senha">Senha</label>
                    <div className='flex flex-inline w-[100%]'>
                      <input id="senha" className='rounded-s border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' name='senha' type='password' value={'0'.repeat(10)} disabled/>
                      <button className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded-e' onClick={(e) => e.preventDefault()}>E</button>
                    </div>
                  </div>
                </div>

                <h1 className='text-3xl text-primary font-bold mt-7'>Cargos</h1>
                <div className='flex flex-col justify-between mt-4 px-5 border-b pb-8 border-gray-400'>
                  {
                    Array.from({length:3}).map((_, i) => {
                      return <RoleComponent cargo={cargos[i]?.cargo} equipe={cargos[i]?.equipe} img={cargos[i]?.img} active={cargos[i]?.active}/>
                    })
                  }
                </div>

                <h1 className='text-3xl text-primary font-bold mt-7'>Preferências</h1>
                <div className='flex justify-between mt-5 pb-8'>
                    <div class="flex items-center">
                        <input id="default-checkbox" type="checkbox" checked={userInfo.notify} class="w-5 h-5 bg-gray-100 border-gray-300 rounded-full focus:ring-primary focus:color-primary focus:ring-2" />
                        <label for="default-checkbox" class="ml-2 text-md font-medium text-primary/70">Receber atualizações por e-mail</label>
                    </div>
                    <button className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded' onClick={(e) => e.preventDefault()}>Salvar</button>
                </div>
              </form>
            </div>

          </div>
        </div>
    </AuthComponent>
  )
}

export default Profile