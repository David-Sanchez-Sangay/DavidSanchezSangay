
const axios = require("axios");
const express = require("express");

const app = express();


app.get("/usuarios", async (req, res) => {
    try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        const usuarios = response.data.results.map(usuario => ({
            Nombre: '${usuario.name.first} ${usuario.name.last}',
            Genero: usuario.gender,
            Ubicacion: '${usuario.location.city}, ${usuario.location.country}',
            Correo: usuario.email,
            FechNac: usuario.dob.date,
            Fotografia: usuario.picture.large,
        }));
        res.json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});