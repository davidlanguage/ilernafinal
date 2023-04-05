import React from "react";
import '../estilos/SobreNosotrosEstilo.css'

const SobreNosotros = () => {
  return (
    <div className="sobrenosotros">
      <h3>Psicología a la carta</h3>
      <h4>Un proyecto pensando en el cuidado del cliente</h4>
      <p className="primerParrafo">
        Creemos firmemente en lo que hacemos y en nuestra profesión. 
        A día de hoy y cada vez más nos aislamos, sentimos que lo que nos ocurre
        es algo pasajero, un simple "ya se me pasará" es suficiente. Desde aquí buscamos 
        brindar un espacio seguro y acogedor para que pueda compartir sus inquietudes y preocupaciones sin temor a ser juzgado. 
        Nuestros especialistas están comprometidos en ofrecer una atención personalizada y adaptada a sus necesidades, 
        guiándolo en un proceso que le permita superar los obstáculos que le impiden vivir plenamente.
      </p>
      <p>
        ¿Por qué debe confiar en nosotros? Gracias al amplio gabinete de profesionales que tenemos, 
        su mensaje será atendido por aquel especialista, personalizado para usted, que dará las consignas idóneas para notar un cambio progresivo.
        Con este sistema web queremos acercar los servicios terapéuticos a los usuarios que bien por falta de tiempo para asistir a una sesión o por sentirse cohibidos a expresar 
        en persona cómo se sienten, dispondrán de una plataforma que atenderá y dará una respuesta individualizada a lo que se nos plantee. Creemos que todos merecemos recibir 
        el apoyo y las herramientas necesarias para mejorar nuestro bienestar emocional, y por eso nos esforzamos por hacer que la terapia sea accesible para todos. 
        
      </p>
      <p className="ultimoParrafo">
      Por último, queremos destacar que nuestra plataforma es completamente confidencial y segura. Nos comprometemos a proteger la privacidad de nuestros usuarios 
      y a garantizar que la información que nos brinden sea tratada con el mayor cuidado y respeto posible. Creemos que la confidencialidad es fundamental para establecer 
      una relación de confianza y honestidad entre el paciente y el especialista, y trabajamos duro para mantener esa confianza en todo momento.
      </p>
    </div>
  );
};

export default SobreNosotros;
