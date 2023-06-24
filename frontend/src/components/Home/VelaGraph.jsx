export default function VelaGraph({ nome, qnt, tamanho, cor }) {
  return (
    <div className="flex flex-col-reverse w-1/3">
      <div className="text-center text-lg font-medium text-primary px-2 py-1">
        {nome}
      </div>
      <div className={`${cor} ${tamanho}`}></div>
      <h1 className="text-center text-3xl font-bold text-primary mt-1">
        {qnt}
      </h1>
    </div>
  );
}
