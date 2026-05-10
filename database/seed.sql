USE skyship_express_db;

INSERT INTO usuarios (nombre_completo, correo, telefono, direccion, password, rol)
VALUES
('Administrador General', 'admin@skyship.com', '55555555', 'Oficina Central', 'admin123', 'admin'),
('Juan Pérez', 'juan@correo.com', '12345678', 'Zona 1, Guatemala', 'juan123', 'cliente'),
('Ana López', 'ana@correo.com', '87654321', 'Zona 3, Quetzaltenango', 'ana123', 'cliente');

INSERT INTO contactos (nombre_completo, correo, telefono, mensaje)
VALUES
('Carlos Méndez', 'carlos@correo.com', '44445555', 'Quiero información sobre envíos internacionales.'),
('Lucía Ramírez', 'lucia@correo.com', '33334444', 'Deseo conocer el tiempo estimado de entrega.');

INSERT INTO envios (codigo_guia, usuario_id, destino, descripcion, estado, costo_estimado)
VALUES
('SKY-001', 2, 'Guatemala', 'Documentos empresariales', 'en_transito', 75.00),
('SKY-002', 2, 'Escuintla', 'Paquete pequeño', 'pendiente', 60.00),
('SKY-003', 3, 'Quetzaltenango', 'Artículos personales', 'entregado', 95.00);