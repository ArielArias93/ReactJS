import React, {useRef} from 'react';

const Form = ({NvContacto}) => {

    const nombre = useRef('');
    const usuario = useRef('');

    function nuevoContacto(e) {

        e.preventDefault();

        const datosContacto = {nombre: nombre.current.value, usuario: usuario.current.value, conectado: true}
    
        NvContacto(datosContacto);
        nombre.current.value = '';
        usuario.current.value = '';
    }

    return (

        <form onSubmit={nuevoContacto} className='contacto'>

            <h2>Agregar nuevo contacto</h2>

            <input placeholder='Ingrese nombre contacto' ref={nombre}/>
            <input placeholder='Ingrese usuario' ref={usuario}/>

            <button onClick={nuevoContacto} style={{color:'white', backgroundColor:'green'}}>
                Agregar
            </button>

        </form>

    );
}


export default Form;
