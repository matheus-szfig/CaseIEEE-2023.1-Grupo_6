import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SelectCargo ({disabled, id, name, onChange}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    preencheSelect();
  }, []);

  async function preencheSelect() {
    try {
      const response = await axios.get("http://localhost:5000/cargo/get");
      //console.log(response.data);
      const cargoOptions = response.data.cargos.map((cargo) => ({
        id: cargo.id,
        nome: cargo.nome,
      }));

      setOptions(cargoOptions);
    } catch (error) {
      console.log(error);
    }
  }



    return (
        <select 
          disabled={disabled} 
          id={id} 
          name={name} 
          onChange={onChange} 
          className='w-[100%] h-[23%] p-2 border-2 focus:shadow-none hover:cursor-pointer rounded-[4px]'
        >
        <option className="text-gray-300" value="">-Selecione um cargo-</option>
      {options.map((option) => (
        <option
          key={option.id}
          className="text-black"
          value={option.nome}
          label={option.nome}
        />
      ))}
       </select>
    )
  }