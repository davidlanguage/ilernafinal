import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imagenes/psicologialogo2.png";
import "../estilos/NavegacionEstilo.css";

function Navegacion(props) {
  return (
    <div className="">
      <ul className="flexNavegacion ">
        <img
          src={Logo}
          height="100px"
          alt="Logo de la compañía"
          className="nav-item"
        ></img>
        <li className="nav-item">
          <NavLink
            className="btn btn-primary"
            to="/"
            onClick={props.salirDeLaSesion}
          >
            {props.usuarioLogueado == null
              ? "Página Principal"
              : "Cerrar Sesión"}
          </NavLink>
        </li>

        {props.usuarioLogueado == null ? (
          <li className="nav-item">
            <NavLink className="btn btn-primary" to="/sobrenosotros">
              Sobre Nosotros
            </NavLink>
          </li>
        ) : (
          ""
        )}

        {props.usuarioLogueado == null ? (
          <li>
            <NavLink className="btn btn-primary" to="/crearusuario">
              Crear Usuario
            </NavLink>
          </li>
        ) : (
          ""
        )}

        {props.usuarioLogueado == null ? (
          <li>
            <NavLink className="btn btn-primary" to="/iniciarsesion">
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
              className="btn btn-primary"
            >
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
