const express = require("express");
const cors = require("cors");
const conexion = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "API de SkyShip Express funcionando correctamente" });
});

app.get("/usuarios", (req, res) => {
  const sql = `
    SELECT id, nombre_completo, correo, telefono, direccion, rol, fecha_creacion
    FROM usuarios
  `;

  conexion.query(sql, (error, resultados) => {
    if (error) {
      return res.status(500).json({
        mensaje: "Error al obtener usuarios",
        error: error.message,
      });
    }

    res.json(resultados);
  });
});

app.get("/contactos", (req, res) => {
  const sql = `
    SELECT id, nombre_completo, correo, telefono, mensaje, fecha_creacion
    FROM contactos
  `;

  conexion.query(sql, (error, resultados) => {
    if (error) {
      return res.status(500).json({
        mensaje: "Error al obtener contactos",
        error: error.message,
      });
    }

    res.json(resultados);
  });
});

app.get("/envios", (req, res) => {
  const sql = `
    SELECT 
      e.id,
      e.codigo_guia,
      u.nombre_completo,
      e.destino,
      e.descripcion,
      e.estado,
      e.costo_estimado,
      e.fecha_creacion
    FROM envios e
    INNER JOIN usuarios u ON e.usuario_id = u.id
  `;

  conexion.query(sql, (error, resultados) => {
    if (error) {
      return res.status(500).json({
        mensaje: "Error al obtener envíos",
        error: error.message,
      });
    }

    res.json(resultados);
  });
});

module.exports = app;