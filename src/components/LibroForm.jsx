import React, { useState } from 'react';

export const LibroForm = ({ addLibro }) => {
  const [libro, setLibro] = useState({ id: '', title: '', author: '', year: '', genre: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibro({ ...libro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!libro.id || !libro.title || !libro.author || !libro.year || !libro.genre) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    addLibro(libro);
    setLibro({ id: '', title: '', author: '', year: '', genre: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-row">
        <div className="form-group col-md-2">
          <label>ID</label>
          <input type="text" className="form-control" name="id" value={libro.id} onChange={handleChange} />
        </div>
        <div className="form-group col-md-4">
          <label>Título</label>
          <input type="text" className="form-control" name="title" value={libro.title} onChange={handleChange} />
        </div>
        <div className="form-group col-md-3">
          <label>Autor</label>
          <input type="text" className="form-control" name="author" value={libro.author} onChange={handleChange} />
        </div>
        <div className="form-group col-md-1">
          <label>Año</label>
          <input type="text" className="form-control" name="year" value={libro.year} onChange={handleChange} />
        </div>
        <div className="form-group col-md-2">
          <label>Género</label>
          <input type="text" className="form-control" name="genre" value={libro.genre} onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Agregar Libro</button>
    </form>
  );
};
