USE skyship_express_db;

SELECT * FROM usuarios;
SELECT * FROM contactos;
SELECT * FROM envios;

SELECT 
    e.id,
    e.codigo_guia,
    u.nombre_completo,
    e.destino,
    e.estado,
    e.costo_estimado,
    e.fecha_creacion
FROM envios e
INNER JOIN usuarios u ON e.usuario_id = u.id;