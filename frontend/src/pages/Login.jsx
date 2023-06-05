import React, { useState } from "react";
import "../styles/stylesLogin.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginform">
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
        <div className="inputLoginform">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example.email@gmail.com"
          />
        </div>

        <div className="inputLoginform">
          <label htmlFor="password">Senha</label>
          <div className="passwordInput">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder= {showPassword ? "password" : "*******"}
            />
            <span
              className="passwordToggle"
              onClick={handlePasswordToggle}
            >
              
              {showPassword ? (

                  <img
                  className="h-6"
                  src={process.env.PUBLIC_URL + "/Visibility.svg"}
                  alt="Show Password"
                  />
                ): 
              (<img
              className="h-6"
              src={process.env.PUBLIC_URL + "/VisibilityOff.svg"}
              alt="Hide Password"
              />)
              
            
            }
            </span>
          </div>
        </div>

        <button className="button">Entrar</button>

        <div className="footer">
          <p>Ainda não tem conta?</p>
          <button className="signupButton">Cadastre-se</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
