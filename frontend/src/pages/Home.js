import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home (props) {
  return (
    <div>
      <Navbar selected={"Home"}/>
      <div className="container mt-5">
        <Header titulo={"Home"}/>
        <div id="content" className="d-flex flex-row mt-4 px-3">
          <div id="menu" className="w-25">
            <h3 className="ms-2">Votações</h3>
            <div className="border border-grey me-3" style={{height:'55vh'}}>
            </div>
          </div>
          <div id="target" className="w-75 ms-3">
            <h3 className="ms-2">Votar</h3>
            <div className="border border-grey" style={{height:'55vh'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;