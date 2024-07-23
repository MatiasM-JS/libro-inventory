import React, { useState, useEffect } from 'react';
import { LibroForm } from './components/LibroForm';
import { LibroTable } from './components/LibroTable';
import './styles.css';

export const App = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const storedLibros = JSON.parse(localStorage.getItem('libros')) || [];
    setLibros(storedLibros);
  }, []);

  const addLibro = (libro) => {
    if (libros.some((l) => l.title === libro.title)) {
      alert('El libro ya existe.');
      return;
    }
    const updatedLibros = [...libros, libro];
    setLibros(updatedLibros);
    localStorage.setItem('libros', JSON.stringify(updatedLibros));
  };

  const updateLibro = (updatedLibro) => {
    const updatedLibros = libros.map((libro) =>
      libro.id === updatedLibro.id ? updatedLibro : libro
    );
    setLibros(updatedLibros);
    localStorage.setItem('libros', JSON.stringify(updatedLibros));
  };

  const deleteLibro = (id) => {
    const updatedLibros = libros.filter((libro) => libro.id !== id);
    setLibros(updatedLibros);
    localStorage.setItem('libros', JSON.stringify(updatedLibros));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Inventario de Libros</h1>
      <LibroForm addLibro={addLibro} />
      <LibroTable libros={libros} updateLibro={updateLibro} deleteLibro={deleteLibro} />
    </div>
  );
};
