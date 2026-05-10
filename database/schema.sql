CREATE DATABASE skyship_express_db;
USE skyship_express_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    correo VARCHAR(120) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'cliente') NOT NULL DEFAULT 'cliente',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    correo VARCHAR(120) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE envios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_guia VARCHAR(50) NOT NULL UNIQUE,
    usuario_id INT NOT NULL,
    destino VARCHAR(150) NOT NULL,
    descripcion TEXT,
    estado ENUM('pendiente', 'en_transito', 'entregado') NOT NULL DEFAULT 'pendiente',
    costo_estimado DECIMAL(10,2) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);