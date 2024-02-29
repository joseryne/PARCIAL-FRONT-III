//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from "react";

export const Card = ({ nombre, apellido, pelicula }) => {
  return (
    <div
      style={{
        border: "4px solid hsla(298, 87%, 27%, 0.8)",
        width: "300px",
        height: "150px",
        margin: "10px",
        padding: "25px 0px",
      }}
    >
      <h3>
        Hola {nombre} {apellido}!
      </h3>
      <h4>
        Sabemos que tu Película favorita es:
        <h2>{pelicula} </h2>
      </h4>
    </div>
  );
};
