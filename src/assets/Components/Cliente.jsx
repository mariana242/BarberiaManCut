import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


const AgregarCliente = ({ onAdd }) => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ nombre });
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setNombre(event.target.value)}
      />
      <button type="submit">Agregar</button>
    
    </form>
  );
};

const ClienteCard = ({ nombre }) => {
  return (
    <section>
      <h3>{nombre}</h3>
    </section>
  );
};

const Cliente = () => {
  const [listaCliente, setListaCliente] = useState([]);

  const handleAddClient = (cliente) => {
    setListaCliente((VistaLista) => [...VistaLista, cliente]);
  };

  return (
    <section>
        <Header/>
      <h1>Clientes</h1>
      <AgregarCliente onAdd={handleAddClient} />
      <section>
        {listaCliente.map((cliente, index) => (
          <ClienteCard key={index} nombre={cliente.nombre} />
        ))}
      </section>
      <button><Link to={'/'}>Pagina Principal</Link></button>

    </section>
  );
};

export default Cliente;