import React, {useState} from 'react';

//login logout buttons

const LoginButton = ({loginAction, propStyle}) => {
    return (

        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (

        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

const loggedStyle = {
    backgroundColor : 'green',
    color: 'white',
    fontWeight: 'bold'
};

const unLoggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}


const OptionalRender = () => {

    const [acceso, setAcceso] = useState(false);
    const [nMessage, setNmessage] = useState(0)

    //const updateAcceso = () => {

    //    setAcceso(!acceso)
    //}

    const loginAction = () => {

        setAcceso(true)
    }

    const logoutAction = () => {
        
        setAcceso(false)
    }


    let botonOpcional;

    //if (acceso) {
    //    botonOpcional = <button onClick={logoutAction}>Logout</button>
    //} else{
    //    botonOpcional = <button onClick={loginAction}>Login</button>
    //}

    if (acceso) {
        botonOpcional = <LogoutButton propStyle={unLoggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        botonOpcional = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    let AddMessages = () => {
        setNmessage(nMessage + 1)
    }

    return (

        <div>

            {botonOpcional}

            {acceso ? (

                <div>
                    { nMessage > 0 ? 

                        <p>Tienes {nMessage} {nMessage > 1 ? 'nuevos mensajes': 'nuevo mensaje'}...</p> :
                        <p>No tienes mensajes</p>
                    }

                    <button onClick={AddMessages}>{nMessage === 0 ? 'Agregar tu primer mensaje' : 'Agregar mensaje' }</button>
                </div>
            
            ) : null}

            {/*{nMessage === 1 && <p>Tienes {nMessage} nuevo mensaje</p>}

            {nMessage > 1 && <p>Tienes {nMessage} nuevos mensajes</p>}

            {nMessage === 0 && <p>No tienes nuevos mensajes</p>}*/}

           
            
        </div>
    );
}

export default OptionalRender;
