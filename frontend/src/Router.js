import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Equipes from "./pages/Equipes";
import Admin from "./pages/Admin";
import Cadastro from "./pages/Cadastro";

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/equipes',
    element: <Equipes/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/cadastro',
    element: <Cadastro/>
  },
  // Adicione outras rotas conforme necessário
  // {
  //   path: '/exemplo',
  //   element: <Exemplo />
  // },
];

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
