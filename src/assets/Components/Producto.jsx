import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Producto = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');

  const handleAddProduct = (event) => {
    event.preventDefault();
    setListaProductos([...listaProductos, nuevoProducto]);
    setNuevoProducto('');
  };

  return (
    <section>
      <Header/>
      <h1>Productos</h1>
      <section className='cajaProductos'>
        <form onSubmit={handleAddProduct}>
          <label htmlFor='nuevoProducto'>Agregar nuevo producto:</label>
          <input
            type='text'
            value={nuevoProducto}
            onChange={(event) => setNuevoProducto(event.target.value)}
          />
          <button type='submit'>Agregar</button>
        </form>
      </section>
      <section className='seccionProductos'>
        {listaProductos.map((producto, index) => (
          <section key={index}>
            <h3>{producto}</h3>
          </section>
        ))}
      </section>
      <button><Link to={'/'}>Pagina Principal</Link></button>
    </section>
  );
};

export default Producto;