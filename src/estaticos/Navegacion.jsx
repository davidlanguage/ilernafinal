import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imagenes/psicologialogo2.png";
import "../estilos/NavegacionEstilo.css";

function Navegacion(props) {
  return (
    <div className="barraDeNavegacion">
      <ul className="flexNavegacion">
        <img src={Logo} height="100px" alt="Logo de la compañía"></img>
        <li>
          <NavLink
            className="navLink"
            to="/"
            onClick={() => {
              props.salirDeLaSesion(null);
            }}
          >
            {props.usuarioLogueado == null
              ? "Página Principal"
              : "Cerrar Sesión"}
          </NavLink>
        </li>

        {props.usuarioLogueado == null ? (
          <li>
            <NavLink className="navLink" to="/sobrenosotros">
              Sobre Nosotros
            </NavLink>
          </li>
        ) : (
          ""
        )}

        {props.usuarioLogueado == null ? (
          <li>
            <NavLink className="navLink" to="/crearusuario">
              Crear Usuario
            </NavLink>
          </li>
        ) : (
          ""
        )}

        {props.usuarioLogueado == null ? (
          <li>
            <NavLink className="navLink" to="/iniciarsesion">
              Iniciar Sesión
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {props.usuarioLogueado != null ? (
          <li>
            <button
            id="botonRefrescar"
              onClick={() => props.setRefrescaHooks()}
              className="navLink refrescar"
            >
              {" "}
              Refrescar
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Navegacion;
