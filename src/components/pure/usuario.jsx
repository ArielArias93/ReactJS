import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contacto.class';


const UsuarioComp = ({contacto}) => {

    return (
        <div>
            
            <h2> Nombre: {contacto.Nombre} </h2>            
            <h2> Apellido: {contacto.Apellido} </h2>
            <h4> Email: {contacto.Email} </h4>
            <h4> Estado: {contacto.Conectado ? 'Contacto en linea' : 'Contacto no disponible'} </h4>

        </div>
    );
};


UsuarioComp.propTypes = {
    contacto: PropTypes.instanceOf(contacto)
};


export default UsuarioComp;
