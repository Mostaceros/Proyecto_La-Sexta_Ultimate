const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '..'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'inicio.html')); 
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'carrito.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'contacto.html'));
});

app.get('/iniciar-sesion', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'iniciar sesion.html'));
});

app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'producto.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'registro.html'));
});

app.get('/boucher', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'boucher.html'));
});

app.get('/cargando', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'cargando.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});