import React, {useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es : {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}



export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion() {

        setsessionData(
            {
            token: '12345678',
            sesion: sessionData.sesion + 1
            }
        );
        
    }

    return (
        <div>
            
            <miContexto.Provider value={sessionData}>
                <h1>***Ejemplo de useStates() y useContext()***</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesion</button>
            </miContexto.Provider>
        </div>
    );
}


