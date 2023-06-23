export default function VerificaVotacao({id, title, dataInicio, dataFim, selected, onClick}) {

  function DataFormat(){
    let data = new Date(dataFim).toISOString().split('T')[0];
    data = data.split('-').reverse().toString().replace(/\,/g, '/');
    return data;
  }

  return (
    <button className={`w-full h-50 mb-1 bg-primary rounded flex flex-col px-3 pt-1.5 pb-1 text-white
    ${selected ? "opacity-100" : "opacity-70"}`}
    onClick={onClick}>
      <h1 className="font-light">{title}</h1>
      <h1 className="font-medium">{ !dataFim ? "Em andamento" : "Finalizada em: "+DataFormat()}</h1>
    </button>
  );
}
