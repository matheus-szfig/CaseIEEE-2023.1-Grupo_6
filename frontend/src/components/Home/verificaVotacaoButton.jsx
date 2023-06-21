export default function verificaVotacao(id, title, dataInicio, dataFim){
    if(dataFim==null){
    return(
        <button className="votacaoAndamentoButton">
            <span>
                {title}
            </span>
            <h1>
                Em andamento
            </h1>
        </button>
    )
    }
    else{
        return(
            <button className="votacaoFinalizadaButton">
                <span>
                    {title}
                </span>
                <h1>
                    Finalizada em {dataFim}
                </h1>
            </button>
        )
    }
}