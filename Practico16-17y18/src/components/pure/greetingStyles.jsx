import React, {useState} from 'react';

const loggedStyle = {
    color: 'blue'
};

const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyles = (props) => {
    
    const [logged, setLogged] = useState(false);

    const greetingUser = () => <p>Hola, {props.name}</p>

    const logeate = () => <p>Logeate, Por Favor!</p>

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>

        { logged ?
         greetingUser()
         : 
         logeate()
         }

        <button onClick={() => {
            console.log('Boton Pulsado')
            setLogged(!logged)
        }}>
         {logged ? 'Logout' : 'Login' }
        </button>

        </div>
    );
}

export default GreetingStyles;
