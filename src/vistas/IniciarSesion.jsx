import React from "react";
import { useNavigate } from "react-router-dom";
import "../estilos/IniciarOCrearSesionEstilo.css";
import { useState} from "react";

const IniciarSesion = (props) => {
  const [usuario, setUsuario] = useState("");
  const [contrasenya, setContrasenya] = useState("");
  const navigate = useNavigate();

  const entrarSesion = (evento) => {
    evento.preventDefault();
    const misHeaders = new Headers();
    misHeaders.append("Content-Type", "application/json");

    const datosEnvio = JSON.stringify({
      nombreUsuario: usuario,
      contrasenya: contrasenya,
    });

    const opcionesDePeticion = {
      method: "POST",
      headers: misHeaders,
      body: datosEnvio,
      redirect: "follow",
    };

    fetch("http://localhost:9090/verificarsesion", opcionesDePeticion)
      .then((response) => response.text())
      .then((result) => {
        props.iniciarSesion(JSON.parse(result));
        navigate("/mensajesdeusuarios");
      }, [])
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="iniciarSesionContainer">
      <form method="post" action="" onSubmit={entrarSesion}>
        <div className="form-group">
          <label htmlFor="usuario">Entre el nombre de usuario</label>
          <input
            type="text"
            placeholder="Nombre de usuario"
            id="usuario"
            name="usuario"
            value={usuario}
            className="form-control"
            onChange={(e) => setUsuario(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="contrasenya">Entre la contraseña</label>
          <input
            type="password"
            id="contrasenya"
            name="contrasenya"
            placeholder="Introduzca su contraseña"
            value={contrasenya}
            className="form-control"
            onChange={(e) => setContrasenya(e.target.value)}
            required
          ></input>
        </div>
        <div className="unidad">
          <button type="submit" className="btn btn-primary">Acceder</button>
        </div>
      </form>
    </div>
  );
};
export default IniciarSesion;
