const usuariosDemo = [
  { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com", rol: "cliente" },
  { id: 2, nombre: "Ana López", correo: "ana@mail.com", rol: "cliente" },
];

function TablaUsuarios() {
  return (
    <div className="tabla-admin">
      <h2>Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuariosDemo.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;