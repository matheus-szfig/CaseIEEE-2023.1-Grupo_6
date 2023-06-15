import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {
  AuthComponent,
  authInfo as authInfoSelector
} from '../components/Auth'
import { ActiveRole, DisabledRole, EmptyRole} from '../components/profile/Role/Index';
import PictureTab from '../components/profile/PictureTab'
import { useRecoilValue } from 'recoil';
import '../styles/Profile.css';
import { toast } from 'react-toastify';

const Profile = () => {

  const [cargos, setCargos] = useState([]);
  const userInfo = useRecoilValue(authInfoSelector);
  const [changePass, setChangePass] = useState(false);

  const [newPassoword, setNewPassoword] = useState({
    old:"",
    current: "",
    new: "",
    confirm:""
  });


  function ToggleEditPass (e) {
    e.preventDefault();
    document.getElementById('changePassForm').classList.toggle("active");
    document.getElementById('spacer').classList.toggle("active");
    setChangePass(!changePass);
  }

  function LoadResources () {
    // carrega os dados do usuário aqui
    setCargos([
      {equipe:"WolfRocket", cargo:"Assessor", active:1, img:"https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg"},
      {equipe:"WolfBotz", cargo:"Membro Técnico", active:0, img:"https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg"}
    ]);

  }

  function SaveData (e) {
    e.preventDefault();
    toast.success("Salvo!")
  }

  useEffect(() => {
    LoadResources ();
  }, []);

  return (
    <AuthComponent redirect={'/login'}>
        <Navbar/>
        <div className='mx-5 mt-10 sm:mx-[4.5rem]'>
          <h1 className='text-3xl font-bold text-primary'>Configurações</h1>
          <div className='mt-6 block md:flex'>

            <PictureTab nome={userInfo.nome} img={"https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg"}/>

            <div className='rounded border border-light-gray pt-7 px-10 shadow-md w-4/4 mt-5 md:mt-0 md:w-3/4 md:ms-10 mb-7'>
              <form>

                <h1 className='text-3xl text-primary font-bold'>Conta</h1>
                <div className='flex justify-between mt-5'>
                  <div className='flex flex-inline flex-col w-[100%] pe-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="email">Email</label>
                    <input id="email" className='rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' autoComplete='email' name='email' type='text' disabled value={userInfo.email}/>
                  </div>
                  <div className='flex flex-inline flex-col w-[100%] ps-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="senha">Senha Atual</label>
                    <div className='flex flex-inline w-[100%]'>
                      <input id="senha" className='rounded-s border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' autoComplete='current-password' name='current-password' type='password' value={'0'.repeat(10)} disabled={!changePass}/>
                      <button className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded-e' onClick={ToggleEditPass}>{!changePass ? "E" : "X"}</button>
                    </div>
                  </div>
                </div>

                <div id="changePassForm" className='flex justify-between mt-5'>
                  <div className='flex flex-inline flex-col w-[100%] pe-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="email">Nova Senha</label>
                    <input id="new-password" className='rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' autoComplete='new-password' name='new-password' type='password'/>
                  </div>
                  <div className='flex flex-inline flex-col w-[100%] ps-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="email">Confirmar Senha</label>
                    <input id="confirm-password" className='rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' name='confirm-password' type='password'/>
                  </div>
                </div>

                <div id='spacer'></div>

                <div className='border-b border-gray-400'></div>

                <h1 className='text-3xl text-primary font-bold mt-7'>Cargos</h1>
                <div className='flex flex-col justify-between mt-4 px-5 border-b pb-8 border-gray-400'>
                  {
                    Array.from({length:3}).map((_, i) => {
                      return !cargos[i] ?
                        <EmptyRole /> :
                        (
                          !cargos[i].active ?
                            <DisabledRole active={cargos[i].active} equipe={cargos[i].equipe} cargo={cargos[i].cargo} img={cargos[i].img}/> :
                            <ActiveRole active={cargos[i].active} equipe={cargos[i].equipe} cargo={cargos[i].cargo} img={cargos[i].img}/>
                        )
                    })
                  }
                </div>

                <h1 className='text-3xl text-primary font-bold mt-7'>Preferências</h1>
                <div className='flex justify-between mt-5 pb-8'>
                    <div class="flex items-center">
                        <input id="default-checkbox" type="checkbox" checked={userInfo.notify} class="w-5 h-5 bg-gray-100 border-gray-300 rounded-full focus:ring-primary focus:color-primary focus:ring-2" />
                        <label for="default-checkbox" class="ml-2 text-md font-medium text-primary/70">Receber atualizações por e-mail</label>
                    </div>
                    <button className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded' onClick={SaveData}>Salvar</button>
                </div>
              </form>
            </div>

          </div>
        </div>
    </AuthComponent>
  )
}

export default Profile