import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Ariel');

    function showMessage(text) {
        alert(`Mensaje recibido: ${text}`)
    }

    function UpdateName(newName) {
        setName(newName)
    }

    return (

        <div style={{background: 'red', padding:'10px'}}>
            <Child name={name} send={showMessage} update={UpdateName}></Child>
        </div>
    );
}

export default Father;
