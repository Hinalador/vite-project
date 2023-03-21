import React from 'react';
import { useState } from 'react';

function Estados() {
    /* let nombre = 'Pacho' */
    const [nombre, setNombre] = useState('Manuel');

    function cambioNombre(){
        setNombre = ('Andrés');
    }

  return (
    <div className='App'>
        <h1>{nombre}</h1>
        <button onClick={cambioNombre}>Cambiar Nombre</button>
    </div>
  )
}

export default Estados;