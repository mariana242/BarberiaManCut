import React, { useState } from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';


const AgregarBarbero = ({ onAdd }) => {
  const [ nombre, setNombre] = useState('');

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
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

const BarberCard = ({ nombre }) => {
  return (
    <section>
      <h3>{nombre}</h3>
    </section>
  );
};

const Barberos = () => {
  const [barberList, setBarberList] = useState([]);

  const handleAddBarber = (barber) => {
    setBarberList((prevList) => [...prevList, barber]);
  };

  

  return (
    <section>
        <Header/>
        
      <h1>Barberos</h1>
      <AgregarBarbero onAdd={handleAddBarber} />
      
      <section>
        {barberList.map((barber, index) => (
          <BarberCard key={index} nombre    ={barber.nombre} />
        ))}
      </section>
      <button><Link to={'/'}>Pagina Principal</Link></button>

    </section>
  );
};


export default Barberos;