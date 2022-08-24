import React from 'react';
import { contacto } from '../models/contacto.class';
import UsuarioComp from './pure/usuario';
import { estado } from '../models/estado';

const UsuarioList = () => {

    const usuarioDefault = new contacto('Ariel', 'Arias', 'arielariascjs@gmail.com', estado.desconectado)

    return (
        <div>

        <h1>Informacion de usuario:</h1>

        <UsuarioComp contacto={usuarioDefault}></UsuarioComp>
            
        </div>
    );
}

export default UsuarioList;
