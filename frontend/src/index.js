import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import 'tailwindcss/tailwind.css';
import './styles/styles.css';
import { RecoilRoot } from "recoil";
import { AuthContext } from "./components/Auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ToastContainer position="top-center" autoClose={1500} />
      <RecoilRoot>
          <AuthContext>
              <Router />
          </AuthContext>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
