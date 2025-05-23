import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UseCard from "./components/UseCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/usuarios")
      .then((res) => {
        console.log("Usuarios recibidos:", res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error("Error al cargar usuarios", err));
  }, []);

  return (
    <div className="app-container">
      <h1>Lista de Usuarios</h1>
      <div className="users-grid">
        {users.length === 0 ? (
          <p>No hay usuarios disponibles.</p>
        ) : (
          users.map((user, index) => (
            <UseCard
              key={index}
              nombre={user.nombre}
              genero={user.genero}
              ubicacion={user.ubicacion}
              correo={user.correo}
              fechaNacimiento={user.fechaNacimiento}
              foto={user.foto}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
