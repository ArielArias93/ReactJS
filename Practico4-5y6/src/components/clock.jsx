import React, { useState, useEffect } from 'react';
import '../../src/styles/clock.scss';

const Clock = () => {

  const defaultState = {

    fecha: new Date(),
    nombre: 'Ariel',
    apellidos: 'Arias',
    edad: 29

  };

  const [user, setUser] = useState(defaultState);

  useEffect(() => {

    const intervaloEdad = setInterval(() => {
      actualizarUsuario();
    }, 1000);

    return () => {

      clearInterval(intervaloEdad);

    };
  });

  const actualizarUsuario = () => {

    return setUser({

      fecha: user.fecha,
      edad: user.edad + 1,
      nombre: user.nombre,
      apellidos: user.apellidos,

    });
  };

  return (
    <div>

      <h1>Nombre y Apellido: {user.nombre} {user.apellidos}</h1>
      <h1>Edad: {user.edad}</h1>
      <h2>Hora Actual: {user.fecha.toLocaleTimeString()}</h2>

    </div>
  );
};

export default Clock;