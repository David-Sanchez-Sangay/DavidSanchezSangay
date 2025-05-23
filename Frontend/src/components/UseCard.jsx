import React from "react";
import "./UseCard.css";

function UseCard({ nombre, genero, ubicacion, correo, fechaNacimiento, foto }) {
  return (
    <div className="user-card">
      <img src={foto} alt={`Foto de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>Género: {genero}</p>
      <p>Ubicación: {ubicacion}</p>
      <p>Correo: {correo}</p>
      <p>Nacimiento: {new Date(fechaNacimiento).toLocaleDateString()}</p>
    </div>
  );
}

export default UseCard;
