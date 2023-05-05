import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

const routes = [
  {
    path:'/',
    element: <Home />
  },
]

function Router (props) {
  return (
    <BrowserRouter>
      <Routes>
      {
        routes.map(v => {
          return <Route path={v.path} element={v.element}/>
        })
      }
      </Routes>
    </BrowserRouter>
  )
}

export default Router;