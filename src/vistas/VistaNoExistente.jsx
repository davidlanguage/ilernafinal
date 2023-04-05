import React from "react";
import { Link } from "react-router-dom";
import "../estilos/VistaNoExistenteEstilo.css";

function VistaNoExistente() {
  return (
    <div className="inexistente">
      <Link className="botonatras" to='/'>Atrás 🔙</Link>
      <p className="inexistente">La ruta indicada no existe 🤖.</p>
      <p className="inexistente"> Por favor, apriete el botón 'Atrás' para volver 💻.</p>
    </div>
  );
}

export default VistaNoExistente;
