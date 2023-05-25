import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const routes = [
  // {
  //   path:'/exemplo',
  //   element: <Exemplo />
  // },
];

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((v) => {
          return <Route path={v.path} element={v.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
