import React from "react";
import "../estilos/PaginaPrincipalEstilo.css";
import "../estilos/SobreNosotrosEstilo.css"

export const PaginaPrincipal = () => {
  return (
    <div>
      <h1>Psicología a la Carta</h1>
      <div>
        <h2>Guía de usuario</h2>
        <h3 className="agradecimiento">
          Muchas gracias por visitar nuestra página web. Estamos encantados de
          la confianza que ha depositado en nosotros.
        </h3>
        <p className="ultimoParrafo">
          Nos gustaría mostrarle aquí una pequeña guía de cómo debe utilizar
          esta aplicación
        </p>
        <ul>
          <li>
            <h4>Creamos un usuario...</h4>
            <p>
              Si no tiene una cuenta, en primer lugar debe hacer click en 
              "Crear Usuario", donde le pediremos que cree la cuenta. 
              Como valoramos su privacidad, toda información que nos facilite
              relacionada con su <b>edad</b>, <b>género</b> o <b>nombre real</b> está en su derecho el compartirla o no. Como usted se sienta más
              cómodo. Por supuesto, todo ello sin coste alguno.
            </p>
          </li>
          <li>
            <h4>Iniciamos sesión...</h4>
            <p>
              Una vez que usted se haya registrado,
              se le pedirá que haga click en "Entrar
              Sesión", donde ingresará el nombre de usuario y la contraseña.
            </p>
          </li>
          <li>
            <h4>Creamos un mensaje...</h4>
            <p>
              Una vez iniciada su sesión, se le instará a que
              escriba un mensaje. Este mensaje debe llevar un título indicativo 
              de lo que le sucede, una descripción y se aconseja escribir una dirección de correo
              electrónico, en caso de que desee ser contactado en otra diferente
              a la utilizada a la hora de crear la cuenta.
            </p>
          </li>
          <li>
            <h4>Esperamos a ser contactados por profesionales...</h4>
            <p className="ultimoParrafo">
              Este punto nos gustaría que fuera una aclaración. Ningún otro
              usuario será capaz de ver la información y el mensaje escrito en
              nuestra plataforma. Las únicas personas que leerán sus mensajes
              son nuestro personal psicológico por motivos profesionales. Una
              vez sea contactado, usted podrá decidir si está o no de acuerdo
              con el tratamiento ofertado. Si está de acuerdo, se le pide que
              por favor borre el mensaje para indicarnos así que usted ya está
              siendo atendido por un miembro de nuestro personal.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
