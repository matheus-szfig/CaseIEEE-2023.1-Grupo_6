import '../styles/base.scss'

function Header ({titulo}) {
  return (
    <div>
      <div id="header" className="px-3">
        <h1 className="fw-bold mb-1">{titulo}</h1>
      </div>
      <div className="bg-dark" style={{height:'1px'}} />
    </div>
  )
}

export default Header;