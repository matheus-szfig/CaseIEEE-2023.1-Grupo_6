export default function memberButton(id, nome, cargo, img) {
  return (
    <div className="memberButton">
      {img}
      <div>
        <span>{nome}</span>
        <h1>{cargo}</h1>
      </div>
    </div>
  );
}
