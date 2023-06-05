import React from 'react'
import { useState } from "react";

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

  function handleSubmit(event){
    event.preventDefault();
    console.log(nome, email, senha, senhaConfirmacao, equipe1,cargo1,equipe2,cargo2,equipe3,cargo3,permissao);

    /*const usuario = {nome, email, senha, senhaConfirmacao, equipe1,cargo1,equipe2,cargo2,equipe3,cargo3,permissao};

    try {
      const response = await axios.post("http://localhost:5000/user/cadaster", usuario);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }*/
  }

  function handleChange(event, setText) {
    setText(event.target.value);
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
            <h1 className="underline underline-offset-4 decoration-black text-2xl text-[#0D5FAA] font-bold">CADASTRO DE USUÁRIOS</h1>

            <form onSubmit={handleSubmit}>

            <section className="w-full h-[84%]">

              <div className='mt-3'>
                <label for="nomeInput" className='text-blue-500 font-medium text-lg'>Nome<span className='text-[#F81818]'>*</span> </label>
                <input id="nomeInput" type="text" onChange={(event) => handleChange(event, setNome)} name="NomeUsuario" placeholder="ex: Gustavo Barros Rosa de Andrade" className="w-full h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
              </div>

              <div className='mt-3'>
                <label for="emailInput" className='text-blue-500 font-medium text-lg'>Email<span className='text-[#F81818]'>*</span> </label>
                <input id="emailInput" type="email" onChange={(event) => handleChange(event, setEmail)} name="EmailUsuario" placeholder="ex: membro_do_ramo@exemplo.com" className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
              </div>

              <div className='mt-3'>
                <div className="inline-block w-1/2 h-full pr-2">
                  <label for="senhaInput" className='text-blue-500 font-medium text-lg'>Senha<span className='text-[#F81818]'>*</span> </label>
                  <input id="senhaInput" type="password" onChange={(event) => handleChange(event, setSenha)} name="SenhaUsuario" placeholder='**************' className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
                </div>
                
                <div className="inline-block w-1/2 h-full pl-2">
                  <label for="senhaConfInput" className='text-blue-500 font-medium text-lg'>Confirmação de Senha<span className='text-[#F81818]'>*</span> </label>
                  <input id="senhaConfInput" type="password" onChange={(event) => handleChange(event, setSenhaConfirmacao)} name="ComfimacaoSenhaUsuario" placeholder='**************' className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
                </div>
              </div>

              <div className='mt-3'>
                 <div className="inline-block w-1/2 h-full pr-2">
                  <label for="e1Select" className='text-blue-500 font-medium text-lg'>Primeira Equipe<span className='text-[#F81818]'>*</span> </label>

                   <select id="e1Select" name="equipe1" onChange={(event) => handleChange(event, setEquipe1)} className='w-[100%] h-[23%] text-gray-600 p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                      <option className="text-gray-300" value="">Selecione uma equipe</option>
                      <option className="text-black" value="WIE">WIE</option>
                      <option className="text-black" value="RocketWolf">RocketWolf</option>
                      <option className="text-black" value="WolfBotz">WolfBotz</option>
                      <option className="text-black" value="SocialWolf">SocialWolf</option>
                      <option className="text-black" value="WolfPower">WolfPower</option>
                      <option className="text-black" value="WolfByte">WolfByte</option>
                   </select>
                 </div>
                  
                 <div className="inline-block w-1/2 h-full pl-2">
                   <label for="c1Select" className='text-blue-500 font-medium text-lg'>Primeiro Cargo<span className='text-[#F81818]'>*</span> </label>

                   <select id="c1Select" name="cargo1" onChange={(event) => handleChange(event, setCargo1)} className='w-[100%] h-[23%] text-gray-600 p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                    <option className="text-gray-300" value="">Selecione um cargo</option>
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

                   <select id="e2Select" name="equipe2" onChange={(event) => handleChange(event, setEquipe2)} className='w-[100%] h-[23%] text-gray-600 p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                      <option className="text-gray-300" value="">Selecione uma equipe</option>
                      <option className="text-black" value="WIE">WIE</option>
                      <option className="text-black" value="RocketWolf">RocketWolf</option>
                      <option className="text-black" value="WolfBotz">WolfBotz</option>
                      <option className="text-black" value="SocialWolf">SocialWolf</option>
                      <option className="text-black" value="WolfPower">WolfPower</option>
                      <option className="text-black" value="WolfByte">WolfByte</option>
                   </select>
                 </div>
                  
                 <div className="inline-block w-1/2 h-full pl-2">
                   <label for="c2Select" className='text-blue-500 font-medium text-lg'>Segundo Cargo</label>

                   <select id="c2Select" name="cargo2" onChange={(event) => handleChange(event, setCargo2)} className='w-[100%] h-[23%] text-gray-600 p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                    <option className="text-gray-300" value="">Selecione um cargo</option>
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

                   <select id="e3Select" name="equipe3" onChange={(event) => handleChange(event, setEquipe3)} className='w-[100%] h-[23%] text-gray-600 p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                      <option className="text-gray-300" value="">Selecione uma equipe</option>
                      <option className="text-black" value="WIE">WIE</option>
                      <option className="text-black" value="RocketWolf">RocketWolf</option>
                      <option className="text-black" value="WolfBotz">WolfBotz</option>
                      <option className="text-black" value="SocialWolf">SocialWolf</option>
                      <option className="text-black" value="WolfPower">WolfPower</option>
                      <option className="text-black" value="WolfByte">WolfByte</option>
                   </select>
                 </div>
                  
                 <div className="inline-block w-1/2 h-full pl-2">
                   <label for="c3Select" className='text-blue-500 font-medium text-lg'>Terceiro Cargo</label>

                   <select id="c3Select" name="cargo3" onChange={(event) => handleChange(event, setCargo3)} className='w-[100%] h-[23%] text-gray-600 p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
                    <option className="text-gray-300" value="">Selecione um cargo</option>
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
                <input onChange={(event) => handleCheckboxChange(event, setPermissao)} className="w-3 h-3 mr-2 hover:cursor-pointer" type="checkbox" id="permission"/>
                <label className="text-blue-500 font-medium text-ms hover:cursor-pointer" for="permission">Aceito receber notificações via email</label>
              </div>
                 
              <div className="inline-block items-center w-1/2 h-full">
                <div className='w-full h-full flex items-center justify-end'>
                  <input type="button" value="Cancelar" className="w-[35%] min-w-[65px] h-8 bg-[#F81818] text-white font-medium text-ms hover:cursor-pointer hover:underline hover:underline-offset-2 rounded-[4px]"/>
                  <input type="submit" value="Enviar"  className="ml-10 w-[35%] min-w-[65px] h-8 bg-[#0D5FAA] text-white font-medium text-ms hover:cursor-pointer hover:underline hover:underline-offset-2 rounded-[4px]"/>
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

