import React from "react"
import { NavLink } from "react-router-dom"
import Logo from '../imagenes/psicologialogo2.png'
import { useEffect } from "react";
import { obtenTodosLosMensajesDeUsuario } from "../api/MetodosApi";
import "../estilos/NavegacionEstilo.css";

function Navegacion(props) { 

  return (
    <div className="barraDeNavegacion">
      <ul className="flexNavegacion">
        <li>
        <img src={Logo} height="100px"></img>
        </li>
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
        
          {
            props.usuarioLogueado==null
            ? <li><NavLink
            className="navLink"
            to="/sobrenosotros"
          >Sobre Nosotros
          </NavLink></li>
          :
          ""
          }
          
        
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
              Entrar Sesión
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {props.usuarioLogueado != null ? (
          <button onclick={props.setRefrescaHooks()} className="navLink refrescar"
          > Refrescar
          </button>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Navegacion;
