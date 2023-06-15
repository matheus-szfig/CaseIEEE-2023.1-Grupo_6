export default function SelectEquipe ({disabled, id, name, onChange}) {

    return (
      <select disabled={disabled} id={id} name={name} onChange={onChange} className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'>
        <option className="text-gray-300" value="">-Selecione uma equipe-</option>
        <option className="text-black" value="WIE">WIE</option>
        <option className="text-black" value="Marketing">Marketing</option>
        <option className="text-black" value="Gestão">Gestão</option>
        <option className="text-black" value="RocketWolf">RocketWolf</option>
        <option className="text-black" value="WolfBotz">WolfBotz</option>
        <option className="text-black" value="SocialWolf">SocialWolf</option>
        <option className="text-black" value="WolfPower">WolfPower</option>
        <option className="text-black" value="WolfByte">WolfByte</option>
      </select>
    )
  }