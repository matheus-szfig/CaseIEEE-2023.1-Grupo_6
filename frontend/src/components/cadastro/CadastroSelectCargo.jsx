export default function SelectCargo ({disabled, id, name, onChange}) {

    return (
        <select disabled={disabled} id={id} name={name} onChange={onChange} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
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
    )
  }