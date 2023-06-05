import React from 'react'
import Navbar from '../components/Navbar'
import { AuthComponent } from '../components/Auth'

const Profile = () => {

  const nome = "Matheus de Souza Figueiredo"
  const email = "darkcorner.dev@gmail.com"
  const senha = "anythingsucksyeah"

  return (
    <AuthComponent redirect={"/login"}>
        <Navbar/>
        <div className='mx-5 mt-10 sm:mx-[4.5rem]'>
          <h1 className='text-3xl font-bold text-primary'>Configurações</h1>
          <div className='mt-6 block md:flex'>

            <div className='rounded border border-light-gray h-[100%] p-3 shadow-md w-4/4 md:w-1/4'>
              <div className='flex justify-center'>
                <img className='relative left-3 border rounded-full w-2/4 ms-5' src='https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg'/>
                <span className='flex flex-col-reverse relative right-5'>
                  <button className='bg-gray/0 h-10 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded' onClick={(e) => e.preventDefault()}>E</button>
                </span>
              </div>
              <div className='flex justify-center mt-5 pt-4 pb-2 border-t mx-5 border-gray-400'>
                <h1 className='text-xl text-primary font-bold'>{nome.length > 18 ? nome.slice(0, 15)+'...' : nome}</h1>
              </div>
            </div>

            <div className='rounded border border-light-gray pt-7 px-10 shadow-md w-4/4 mt-5 md:mt-0 md:w-3/4 md:ms-10 mb-10'>
              <form>

                <h1 className='text-3xl text-primary font-bold'>Conta</h1>
                <div className='flex justify-between mt-5 border-b pb-8 border-gray-400'>
                  <div className='flex flex-inline flex-col w-[100%] pe-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="email">Email</label>
                    <input id="email" className='rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' name='email' type='text' disabled value={email}/>
                  </div>
                  <div className='flex flex-inline flex-col w-[100%] ps-5'>
                    <label className='text-md font-bold text-primary opacity-70' for="senha">Senha</label>
                    <div className='flex flex-inline w-[100%]'>
                      <input id="senha" className='rounded-s border border-gray-300 w-[100%] h-10 p-2 bg-gray-100' name='senha' type='password' value={senha} disabled/>
                      <button className='bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded-e' onClick={(e) => e.preventDefault()}>E</button>
                    </div>
                  </div>
                </div>

                <h1 className='text-3xl text-primary font-bold mt-7'>Cargos</h1>
                <div className='flex flex-col justify-between mt-5 px-5 border-b pb-8 border-gray-400'>

                  <div className='p-2 bg-primary rounded'>
                    <div className='flex justify-between px-2'>
                      <div className='flex items-center'>
                        <img className='border rounded-full h-12 me-3' src='https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg' />
                        <div className='flex flex-col justify-center'>
                          <h5 className='text-white font-medium text-lg'>Rocket</h5>
                          <h6 className='text-white text-md font-light'>Acessor</h6>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center'>
                        <div>
                          <button className='bg-white hover:bg-gray-300 rounded h-8 w-8 ' onClick={(e) => e.preventDefault()}>R</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='p-2 bg-primary rounded mt-1'>
                    <div className='flex justify-between px-2'>
                      <div className='flex items-center'>
                        <img className='border rounded-full h-12 me-3' src='https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg' />
                        <div className='flex flex-col justify-center'>
                          <h5 className='text-white font-medium text-lg'>WolfBotz</h5>
                          <h6 className='text-white text-md font-light'>Membro Técnico</h6>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center'>
                        <div>
                          <button className='bg-white hover:bg-gray-300 rounded h-8 w-8 ' onClick={(e) => e.preventDefault()}>R</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='p-2 bg-primary rounded mt-1'>
                    <div className='flex justify-between px-2'>
                      <div className='flex items-center'>
                        <img className='border rounded-full h-12 me-3' src='https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg' />
                        <div className='flex flex-col justify-center'>
                          <h5 className='text-white font-medium text-lg'>IEEE</h5>
                          <h6 className='text-white text-md font-light'>Presidência</h6>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center'>
                        <div>
                          <button className='bg-white hover:bg-gray-300 rounded h-8 w-8 ' onClick={(e) => e.preventDefault()}>R</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className='text-3xl text-primary font-bold mt-7'>Preferências</h1>
                <div className='flex justify-between mt-5 pb-8'>
                    <div class="flex items-center">
                        <input id="default-checkbox" type="checkbox" checked class="w-5 h-5 bg-gray-100 border-gray-300 rounded-full focus:ring-primary focus:color-primary focus:ring-2" />
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