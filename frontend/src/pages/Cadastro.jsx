import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [equipe1, setEquipe1] = useState("");
  const [equipe2, setEquipe2] = useState("");
  const [equipe3, setEquipe3] = useState("");
  const [cargo1, setCargo1] = useState("");
  const [cargo2, setCargo2] = useState("");
  const [cargo3, setCargo3] = useState("");
  const [permissao, setPermissao] = useState("");

  //const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  async function handleSubmit(event){
    event.preventDefault();
    console.log("Info: ",nome, email, senha, senhaConfirmacao, equipe1,equipe2,equipe3,cargo1,cargo2,cargo3,permissao);
    const usuario = {nome,email,senha,senhaConfirmacao,equipe1,cargo1,equipe2,cargo2,equipe3,cargo3,permissao};

    try{
      const response = await axios.post("http://localhost:5000/user/cadaster", usuario);
      console.log(response.data);
      toast.success('Usuário cadastrado com êxito');
    } catch (error) {
      console.log(error);
      toast.error('Falha no envio do formulário');
    }
    //navigate('/login')
  }

  function handleChange(event, setText) {
    setText(event.target.value); 
  }

  const [verificador, setVerificador] = useState(true);
  const [verificador2, setVerificador2] = useState(true);
  function handleChangeSelect(event, setText) {
    setText(event.target.value);

    let equipe1 = document.getElementById('e1Select');
    let equipe2 = document.getElementById('e2Select');
    let equipe3 = document.getElementById('e3Select');
    let cargo1 = document.getElementById('c1Select');
    let cargo2 = document.getElementById('c2Select');
    let cargo3 = document.getElementById('c3Select');
    if(equipe1.value!=="" && cargo1.value!==""){
      setVerificador(false)
    } else{
      setVerificador(true)
      equipe2.value="";
      equipe2.selectedIndex = 0;
      cargo2.value="";
      cargo2.selectedIndex = 0;
    }
    if(equipe2.selectedIndex !== 0 && cargo2.selectedIndex !== 0){
      setVerificador2(false)
    } else{
      setVerificador2(true)
      equipe3.value="";
      equipe3.selectedIndex = 0;
      cargo3.value="";
      cargo3.selectedIndex = 0;
    }

  }

  function handleCheckboxChange(event) {
    setPermissao(event.target.checked);
  }

  return (
    <>
    <section class="bg-[#E6E6E6] w-screen h-screen">

      <div class="items-center p-4 pb-3 w-screen flex">
        <img className="h-12 mr-3" src={process.env.PUBLIC_URL+"/RamoLogoAzul.svg"} alt="Logo IEEE" />
				<h1 className="text-lg text-[#0D5FAA] font-bold">Ramo Estudantil IEEE</h1>
      </div>

      <div class="flex flex-col justify-center items-center w-screen h-fit">
          <div class="w-[90%] h-fit bg-white p-4 border-2 border-[#0D5FAA] rounded-[4px]">
            <h1 className="underline underline-offset-4 decoration-black text-2xl text-[#0D5FAA] font-bold" style={{ textDecorationColor: 'rgb(148 163 184)' }}>CADASTRO DE USUÁRIOS</h1>

            <form onSubmit={handleSubmit}>

            <section className="w-full h-[84%]">

              <div className='mt-3'>
                <label for="nomeInput" id="nome" className='text-blue-500 font-medium text-lg'>Nome<span className='text-[#F81818]'>*</span> </label>
                <input id="nomeInput" type="text" onChange={(event) => handleChange(event, setNome)} name="NomeUsuario" placeholder="ex: Gustavo Barros Rosa de Andrade" className="w-full h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
              </div>

              <div className='mt-3'>
                <label for="emailInput" className='text-blue-500 font-medium text-lg'>Email<span className='text-[#F81818]'>*</span> </label>
                <input id="emailInput" type="email" onChange={(event) => handleChange(event, setEmail)} name="EmailUsuario" placeholder="ex: membro_do_ramo@exemplo.com" className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
              </div>

              <div className='mt-3'>
                <div className="inline-block w-1/2 h-full pr-2">
                  <label for="senhaInput" className='text-blue-500 font-medium text-lg inline'>Senha<span className='text-[#F81818]'>*</span></label>
                  <div className="relative">
                    <input onChange={(event) => handleChange(event, setSenha)} type={showPassword ? "text" : "password"} name="SenhaUsuario" id="senha" placeholder={showPassword ? "exemploDeSenha4567" : "******************"} className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer " onClick={handlePasswordToggle}>
                      {showPassword ? ( <img className="h-6" src={process.env.PUBLIC_URL + "/Visibility.svg"} alt="Show Password"/>) : (<img className="h-6" src={process.env.PUBLIC_URL + "/VisibilityOff.svg"} alt="Hide Password"/> )}
                    </span>
                  </div>
                </div>
                
                <div className="inline-block w-1/2 h-full pl-2">
                  <label for="senhaConfInput" className='text-blue-500 font-medium text-lg'>Confirmação de Senha<span className='text-[#F81818]'>*</span> </label>
                  <div className="relative">
                    <input onChange={(event) => handleChange(event, setSenhaConfirmacao)} type={showPassword ? "text" : "password"} name="SenhaUsuario" id="senhaConfirma" placeholder={showPassword ? "exemploDeSenha4567" : "******************"} className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer " onClick={handlePasswordToggle}>
                      {showPassword ? ( <img className="h-6" src={process.env.PUBLIC_URL + "/Visibility.svg"} alt="Show Password"/>) : (<img className="h-6" src={process.env.PUBLIC_URL + "/VisibilityOff.svg"} alt="Hide Password"/> )}
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-3'>
                 <div className="inline-block w-1/2 h-full pr-2">
                  <label for="e1Select" className='text-blue-500 font-medium text-lg'>Primeira Equipe<span className='text-[#F81818]'>*</span> </label>

                   <select id="e1Select" name="equipe1" onChange={(event) => handleChangeSelect(event, setEquipe1)} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                      <option className="text-gray-300" value="">-Selecione uma equipe-</option>
                      <option className="text-black" value="WIE">WIE</option>
                      <option className="text-black" value="Marketing">Markrting</option>
                      <option className="text-black" value="Gestão">Gestão</option>
                      <option className="text-black" value="RocketWolf">RocketWolf</option>
                      <option className="text-black" value="WolfBotz">WolfBotz</option>
                      <option className="text-black" value="SocialWolf">SocialWolf</option>
                      <option className="text-black" value="WolfPower">WolfPower</option>
                      <option className="text-black" value="WolfByte">WolfByte</option>
                   </select>
                 </div>
                  
                 <div className="inline-block w-1/2 h-full pl-2">
                   <label for="c1Select" className='text-blue-500 font-medium text-lg'>Primeiro Cargo<span className='text-[#F81818]'>*</span> </label>

                   <select id="c1Select" name="cargo1" onChange={(event) => handleChangeSelect(event, setCargo1)} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                    <option className="text-gray-300" value="">-Selecione um cargo-</option>
                    <option className="text-black" value="Presidente">Presidente</option>
                    <option className="text-black" value="Vice-Presidente">Vice-Presidente</option>
                    <option className="text-black" value="Gestão de Pessoas">Gestão de Pessoas</option>
                    <option className="text-black" value="Gestão Financeiro">Gestão Financeiro</option>
                    <option className="text-black" value="Gestão de Projetos">Gestão de Projetos</option>
                    <option className="text-black" value="Coordenador">Coordenador</option>
                    <option className="text-black" value="Líder">Líder</option>
                    <option className="text-black" value="Assessor">Assessor</option>
                    <option className="text-black" value="Consultor">Consultor</option>
                    <option className="text-black" value="Membro Técnico">Membro Técnico</option>
                   </select>
                 </div>
             </div>

             <div className='mt-4'>
                 <div className="inline-block w-1/2 h-full pr-2">
                  <label for="e2Select" className='text-blue-500 font-medium text-lg'>Segunda Equipe</label>

                   <select disabled={verificador} id="e2Select" name="equipe2" onChange={(event) => handleChangeSelect(event, setEquipe2)} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                      <option className="text-gray-300" value="">-Selecione uma equipe-</option>
                      <option className="text-black" value="WIE">WIE</option>
                      <option className="text-black" value="Marketing">Markrting</option>
                      <option className="text-black" value="Gestão">Gestão</option>
                      <option className="text-black" value="RocketWolf">RocketWolf</option>
                      <option className="text-black" value="WolfBotz">WolfBotz</option>
                      <option className="text-black" value="SocialWolf">SocialWolf</option>
                      <option className="text-black" value="WolfPower">WolfPower</option>
                      <option className="text-black" value="WolfByte">WolfByte</option>
                   </select>
                 </div>
                  
                 <div className="inline-block w-1/2 h-full pl-2">
                   <label for="c2Select" className='text-blue-500 font-medium text-lg'>Segundo Cargo</label>

                   <select disabled={verificador} id="c2Select" name="cargo2" onChange={(event) => handleChangeSelect(event, setCargo2)} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                    <option className="text-gray-300" value="">-Selecione um cargo-</option>
                    <option className="text-black" value="Presidente">Presidente</option>
                    <option className="text-black" value="Vice-Presidente">Vice-Presidente</option>
                    <option className="text-black" value="Gestão de Pessoas">Gestão de Pessoas</option>
                    <option className="text-black" value="Gestão Financeiro">Gestão Financeiro</option>
                    <option className="text-black" value="Gestão de Projetos">Gestão de Projetos</option>
                    <option className="text-black" value="Coordenador">Coordenador</option>
                    <option className="text-black" value="Líder">Líder</option>
                    <option className="text-black" value="Assessor">Assessor</option>
                    <option className="text-black" value="Consultor">Consultor</option>
                    <option className="text-black" value="Membro Técnico">Membro Técnico</option>
                   </select>
                 </div>
             </div>

             <div className='mt-4'>
                 <div className="inline-block w-1/2 h-full pr-2">
                  <label for="e3Select" className='text-blue-500 font-medium text-lg'>Terceira Equipe</label>

                   <select disabled={verificador2} id="e3Select" name="equipe3" onChange={(event) => handleChangeSelect(event, setEquipe3)} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                      <option className="text-gray-300" value="">-Selecione uma equipe-</option>
                      <option className="text-black" value="WIE">WIE</option>
                      <option className="text-black" value="Marketing">Markrting</option>
                      <option className="text-black" value="Gestão">Gestão</option>
                      <option className="text-black" value="RocketWolf">RocketWolf</option>
                      <option className="text-black" value="WolfBotz">WolfBotz</option>
                      <option className="text-black" value="SocialWolf">SocialWolf</option>
                      <option className="text-black" value="WolfPower">WolfPower</option>
                      <option className="text-black" value="WolfByte">WolfByte</option>
                   </select>
                 </div>
                  
                 <div className="inline-block w-1/2 h-full pl-2">
                   <label for="c3Select" className='text-blue-500 font-medium text-lg'>Terceiro Cargo</label>

                   <select disabled={verificador2} id="c3Select" name="cargo3" onChange={(event) => handleChangeSelect(event, setCargo3)} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                    <option className="text-gray-300" value="">-Selecione um cargo-</option>
                    <option className="text-black" value="Presidente">Presidente</option>
                    <option className="text-black" value="Vice-Presidente">Vice-Presidente</option>
                    <option className="text-black" value="Gestão de Pessoas">Gestão de Pessoas</option>
                    <option className="text-black" value="Gestão Financeiro">Gestão Financeiro</option>
                    <option className="text-black" value="Gestão de Projetos">Gestão de Projetos</option>
                    <option className="text-black" value="Coordenador">Coordenador</option>
                    <option className="text-black" value="Líder">Líder</option>
                    <option className="text-black" value="Assessor">Assessor</option>
                    <option className="text-black" value="Consultor">Consultor</option>
                    <option className="text-black" value="Membro Técnico">Membro Técnico</option>
                   </select>
                 </div>
             </div>
            </section>

            <section className="w-full h-[8%]">
            <div className='mt-4'>
              <div className="inline-block items-center w-1/2 h-full">
                <input onChange={(event) => handleCheckboxChange(event, setPermissao)} className="rounded-full w-5 h-5 mr-2 mb-1 hover:cursor-pointer" type="checkbox" id="permission"/>
                <label className="text-blue-500 font-medium text-ms hover:cursor-pointer" for="permission">Aceito receber notificações via email</label>
              </div>
                 
              <div className="inline-block items-center w-1/2 h-full">
                <div className='w-full h-full flex items-center justify-end'>
                  <input /*onClick={() => navigate('/login')}*/ type="button" value="Cancelar" className="w-[35%] min-w-[65px] h-8 bg-[#F81818] text-white font-medium text-ms hover:cursor-pointer focus:underline hover:underline hover:underline-offset-2 rounded-[4px]"/>
                  <input type="submit" value="Enviar"  className="ml-10 w-[35%] min-w-[65px] h-8 bg-[#0D5FAA] text-white font-medium text-ms hover:cursor-pointer focus:underline hover:underline hover:underline-offset-2 rounded-[4px]"/>
                </div>
              </div>
            </div>
            </section>

            </form>

          </div>
      </div>
      
    </section>
    </>
  )
}

export default Cadastro;

