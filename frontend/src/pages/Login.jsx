import React, { useState } from "react";
import "../styles/stylesLogin.css";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import useApi from "../hooks/useApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const api = useApi();

  const handleChange = (event, setText) => {
    setText(event.target.value);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
    let input = document.getElementById("password");
    if(showPassword){
      input.style.paddingTop="0.94rem"
    } else{
      input.style.paddingTop="0.6rem"
    }
  };

  async function handleEnvio(event) {
    event.preventDefault();
    const usuario = { email, senha: password };

    try {
      const response = await api.post(
        "http://localhost:5000/user/login",
        usuario
      );

      if (response.data.status === true) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/")
          navigate(0)
        }, 1000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
    className="loginform"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background2.png)` }}
  >
      <header className="header">
        <img
          className="ieee-logo"
          src={process.env.PUBLIC_URL + "/RamoLogo2.svg"}
          alt="Logo IEEE"
        />
        <h1>Ramo Estudantil</h1>
        <h2>IEEE</h2>
      </header>

      <form>
        <h1>Login</h1>
        <hr className="titleLine" />

        <div className="inputContainer">
          <div className="inputLoginform emailBlock">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example.email@gmail.com"
              onChange={(event) => handleChange(event, setEmail)}
            />
          </div>

          <div className="inputLoginform passwordBlock">
            <label htmlFor="password">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder={showPassword ? "password" : "*******"}
                className="py-2 pl-4 pr-10 rounded"
                onChange={(event) => handleChange(event, setPassword)}
              />

              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {showPassword ? (
                  <img
                    className="h-6"
                    src={process.env.PUBLIC_URL + "/Visibility.svg"}
                    alt="Show Password"
                  />
                ) : (
                  <img
                    className="h-6"
                    src={process.env.PUBLIC_URL + "/VisibilityOff.svg"}
                    alt="Hide Password"
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        <button className="button" onClick={handleEnvio}>
          Entrar
        </button>

        <div className="footer">
          <p>Ainda não tem conta?</p>
          <Link to="/cadastro">
            <button className="signupButton">Cadastre-se</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;