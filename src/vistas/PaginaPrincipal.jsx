import React from "react";
import "../estilos/PaginaPrincipalEstilo.css";
import "../estilos/SobreNosotrosEstilo.css"

export const PaginaPrincipal = () => {
  return (
    <div>
      <h1 className="display-1 text-center text-primary">Psicología a la Carta</h1>
      <div>
        <h2 className="display-3 text-center text-primary">Guía de usuario</h2>
        <h3 className="agradecimiento">
          Muchas gracias por visitar nuestra página web. Estamos encantados de
          la confianza que ha depositado en nosotros.
        </h3>
        <p className="blockquote">
          Nos gustaría mostrarle aquí una pequeña guía de cómo debe utilizar
          esta aplicación
        </p>
            <h4 className="fs-4 lh-4 text-center text-info">Creamos un usuario...</h4>
            <p className="text-start">
              Si no tiene una cuenta, en primer lugar debe hacer click en 
              "Crear Usuario", donde le pediremos que cree la cuenta. 
              Como valoramos su privacidad, toda información que nos facilite
              relacionada con su <b>edad</b>, <b>género</b> o <b>nombre real</b> está en su derecho el compartirla o no. Como usted se sienta más
              cómodo. Por supuesto, todo ello sin coste alguno.
            </p >
            <h4 className="fs-4 lh-4 text-center text-info">Iniciamos sesión...</h4>
            <p className="text-start">
              Una vez que usted se haya registrado,
              se le pedirá que haga click en <b>Acceder</b>, donde ingresará el nombre de usuario y la contraseña.
            </p>
            <h4 className="fs-4 lh-4 text-center text-info">Creamos un mensaje...</h4>
            <p className="text-start">
              Una vez iniciada su sesión, se le instará a que <b>escriba un mensaje</b>. Este mensaje debe llevar un título indicativo 
              de lo que le sucede, una descripción y se aconseja escribir una dirección de correo
              electrónico, en caso de que desee ser contactado en otra diferente
              a la utilizada a la hora de crear la cuenta.
            </p>
            <h4 className="fs-4 lh-4 text-center text-info">Esperamos a ser contactados por profesionales...</h4>
            <p className="text-start">
              Este punto nos gustaría que fuera una aclaración. Ningún otro
              usuario será capaz de ver la información y el mensaje escrito en
              nuestra plataforma. <b>Sus datos personales</b> están <b>seguros</b> con nosotros Las únicas personas que leerán sus mensajes
              son nuestro personal psicológico por motivos profesionales. Una
              vez sea contactado, usted podrá decidir si está o no de acuerdo
              con el tratamiento ofertado.
            </p>
      </div>
    </div>
  );
};
