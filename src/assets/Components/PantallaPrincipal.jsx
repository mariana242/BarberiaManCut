import React from 'react';
import Header from './Header';

const PantallaPrincipal = () => {
  return (
    <section>
        <Header/>
            <section className='slider'>
                <section><img src='https://2356021.fs1.hubspotusercontent-na1.net/hubfs/2356021/Barberia.png'></img></section>
            </section>
          <button to={'/'}>Pagina principal</button>
    </section>
    
  );
};

export default PantallaPrincipal;