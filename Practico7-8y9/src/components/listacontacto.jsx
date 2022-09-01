import React, {useState} from 'react';
import Lista from './pure/lista';
import Form from './pure/formulario';


const Listacontacto = () => {
    
    const contactospordefecto = [
      { nombre: 'Ariel', usuario: 'Ariel.Arias', conectado: true },
      { nombre: 'Lionel', usuario: 'Lio10', conectado: false },
      { nombre: 'Neymar', usuario: 'Neymarok', conectado: true },
    ];
  
    const [nuevoContacto, setNuevoContacto] = useState(contactospordefecto);


    function estadoContacto(contacto) {

      const index = nuevoContacto.indexOf(contacto);
      const tempContact = [...nuevoContacto];
      tempContact[index].estado = !tempContact[index].estado;
      setNuevoContacto(tempContact);
    }
  
    function borrarContacto(contacto) {

      const index = nuevoContacto.indexOf(contacto);
      const tempContact = [...nuevoContacto];
      tempContact.splice(index, 1);
      setNuevoContacto(tempContact);
    }
  
    function agregarContacto(contacto) {

      const tempContact = [...nuevoContacto];
      tempContact.push(contacto);
      setNuevoContacto(tempContact);
    }
  
    return (

        <div className="App">
        <h2>Contactos</h2>
  
        <div style={{position: 'relative', paddingtop: '100px'}}>

            <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Estado</th>

                         </tr>
                    </thead>

                    <tbody>

                        {nuevoContacto.map((contacto, index) => {
                            return(

                                <Lista 
                                    key={index}
                                    contacto={contacto}
                                    estado={estadoContacto}
                                    borrar={borrarContacto}
                                    >                                   
                                </Lista>
                                )
                            })}

                    </tbody>
             </table>
        </div>
  
        <Form NvContacto={agregarContacto}></Form>

      </div>

    );
  };

  
  export default Listacontacto;