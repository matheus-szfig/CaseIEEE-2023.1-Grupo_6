import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

function Navbar ({selected}) {

  const navButtons = [
    {
      title:"Home",
      href:"/",
      icon:"",
      admin:0
    },
    {
      title:"Equipes",
      href:"/equipes",
      icon:"",
      admin:0
    },
    {
      title:"Painel",
      href:"/painel",
      icon:"",
      admin:1
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light px-3">
      <Link className="ms-1 navbar-brand d-flex align-items-center" to="/Home">
        <img className='me-2' src={process.env.PUBLIC_URL+"/Ramo_logo.svg"} width={36}/>
        IEEE Cefet-RJ
      </Link>
      <button className="navbar-toggler shadow" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon primary"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            navButtons.map(b => {
              const selectedClass = selected === b.title ? "nav-link active" : "nav-link"
              return (
                <li className="nav-item active">
                  <Link className={selectedClass} to={b.href}>{b.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link active d-flex align-items-center" to="/settings">
              <img className='me-1 d-lg-none' src={process.env.PUBLIC_URL+"/Account.svg"} width={30}/>
              Matheus de Souza
              <img className='ms-1 d-none d-lg-block' src={process.env.PUBLIC_URL+"/Account.svg"} width={30}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;