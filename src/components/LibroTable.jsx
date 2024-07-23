import React from 'react';
import { LibroRow } from './LibroRow';

export const LibroTable = ({ libros, updateLibro, deleteLibro }) => {
  return (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Año</th>
          <th>Género</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro) => (
          <LibroRow key={libro.id} libro={libro} updateLibro={updateLibro} deleteLibro={deleteLibro} />
        ))}
      </tbody>
    </table>
  );
};
