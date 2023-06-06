import React, { useState } from "react";
import "../styles/stylesLogin.css";
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  const handleChange = (event, setText) => {

    setText(event.target.value);
  }

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);

  };

  async function handleEnvio (event) {
    event.preventDefault();
    const usuario = {email, password}
    console.log(email, password);
    try{
      const response = await axios.post("http://localhost:5000/user/login", usuario);
      console.log(response.data);

    }catch (error) {
      console.log(error);
    }
    
  }

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

        <div className="inputContainer">
          <div className="inputLoginform">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example.email@gmail.com"
              onChange={(event) => handleChange(event, setEmail)}
            />
          </div>

          <div className="inputLoginform">
            <label htmlFor="password">Senha</label>
            <div className="passwordInput">
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
                  onClick={handlePasswordToggle} // Adicione esta linha
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
        </div>

        <button className="button" onClick={handleEnvio}>Entrar</button>

        <div className="footer">
          <p>Ainda não tem conta?</p>
          <button className="signupButton">Cadastre-se</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
