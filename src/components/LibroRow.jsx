import React, { useState } from 'react';

export const LibroRow = ({ libro, updateLibro, deleteLibro }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedLibro, setUpdatedLibro] = useState(libro);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedLibro({ ...updatedLibro, [name]: value });
  };

  const handleUpdate = () => {
    updateLibro(updatedLibro);
    setIsEditing(false);
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>{libro.id}</td>
          <td><input type="text" name="title" value={updatedLibro.title} onChange={handleChange} /></td>
          <td><input type="text" name="author" value={updatedLibro.author} onChange={handleChange} /></td>
          <td><input type="text" name="year" value={updatedLibro.year} onChange={handleChange} /></td>
          <td><input type="text" name="genre" value={updatedLibro.genre} onChange={handleChange} /></td>
          <td>
            <button className="btn btn-success btn-sm mr-2" onClick={handleUpdate}>Guardar</button>
            <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>Cancelar</button>
          </td>
        </>
      ) : (
        <>
          <td>{libro.id}</td>
          <td>{libro.title}</td>
          <td>{libro.author}</td>
          <td>{libro.year}</td>
          <td>{libro.genre}</td>
          <td>
            <button className="btn btn-primary btn-sm mr-2" onClick={() => setIsEditing(true)}>Editar</button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteLibro(libro.id)}>Eliminar</button>
          </td>
        </>
      )}
    </tr>
  );
};
