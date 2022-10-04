import React, { useState} from 'react';


const Ejemplo1 = () => {

    const valorinicial = 0;

    const personainicial = {
        nombre: 'Ariel',
        email: 'arielariascjs@gmail.com'
    }

     const [contador, setContador] = useState(valorinicial);
    
     const [persona, setPersona] = useState(personainicial);

     function incrementarContador() {
        
        setContador(contador + 1);
     }

     function actualizarPersona() {
        
        setPersona(
            {
                nombre:'Messi',
                email: 'messi@goat.com'
            }
        )
     }


    return (
        <div>

            <h1>***Ejemplo de useState()***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            
            {/*Bloque de botones para actualizar el estado del componente*/}

            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
