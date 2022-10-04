import React, { useRef} from 'react';

const Child = ({name, send, update}) => {

    const mensajeRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = mensajeRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (

        <div style={{background: 'grey', padding: '30px'}}>
        
            <p onMouseOver={() => console.log('On mouse over')}>Hola {name}</p>
            <button onClick={() => console.log('Boton 1 presionado')}>
                Boton 1
            </button>

            <button onClick={pressButton}>
                Boton 2
            </button>

            <button onClick={() => pressButtonParams('Hola')}>
                Boton 3
            </button>

            

            <input  placeholder= 'Enviar texto al padre'
                    onFocus={() => console.log('Input Focused')}
                    onChange={(e) => console.log('Input Change', e.target.value)}
                    onCopy={() => console.log('Copied text from input')}
                    ref={mensajeRef}
                    />
            
            <button onClick={() => send(mensajeRef.current.value)}>
                Enviar Mensaje
            </button>

            <div style={{marginTop: '20px'}}>   

                <form onSubmit={submitName}>

                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Actualizar</button>

                </form>
                                        
            </div>

        </div>
    );
}

export default Child;
