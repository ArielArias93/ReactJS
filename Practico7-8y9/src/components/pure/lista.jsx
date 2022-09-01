import React from 'react';

const Lista = ({contacto, estado, borrar}) => {


    return (

        <tr className='App'>

        <th>
            <span>{contacto.nombre}</span>
        </th>

        <td>
            <span>{contacto.usuario}</span>
        </td>
        <td>

           <button
                style={{ color: 'white', backgroundColor: contacto.estado ? 'green' : 'red' }}
                onClick={() => {estado(contacto);}}>

                {contacto.estado ? 'Conectado' : 'Desconectado'}

            </button>

            <button 
                style={{color:'white', backgroundColor:'red'}}
                onClick={() => borrar(contacto)}>

                 Borrar
                 
            </button>

        </td>
    </tr>

    );
}

export default Lista;