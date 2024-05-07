import React from 'react';

function Testimonio(props) {


  //uso destructuración de objetos
  const { titulo, sinopsis, director, año,  foto } = props; 

  return (
    <div className="contenedor-peli"> 
      <img src={foto} alt={"Foto de " + titulo} />
    <div className="info-peli">
      <h1>{titulo}</h1>
      <h3>Sinopsis: {sinopsis}</h3>
      <p> Director: {director}</p>
      <p> año: {año}</p>
    </div>

    </div>
  );
}

export default Testimonio;
