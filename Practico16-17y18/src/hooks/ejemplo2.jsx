import React, { useState, useRef, useEffect } from 'react ';
 
 const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);

    const [contador2, setContador2] = useState(0);

    //Crear una referencia para asociar una variable con un elemento del DOM del componente(Vista HTML)

    const miRef = useRef();

    function incrementar1(){

        setContador1(contador1 + 1)
    }
    
    function incrementar2() {
        
        setContador2(contador2 + 1);
    }

   // useEffect(() => {
        
     //   console.log('Cambio en el estado del componente');
     //   console.log('Mostrando referencia del DOM: ');
     //   console.log(miRef);
    //})
    
   // useEffect(() => {
   //      console.log('Cambio en el estado del contador 1');
   //      console.log('Mostrando referencia del DOM: ');
   //      console.log(miRef);      
   // }, [contador1]);

    useEffect(() => {
          console.log('Cambio en el estado del contador ');
          console.log('Mostrando referencia del DOM: ');
          console.log(miRef);      
     }, [contador2]);



    return (

        <div>

            <h1>***Ejemplo de useState(), useRef() y useEffect()***</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            <h3 ref={miRef}>Ejemplo de elemento referenciado</h3>
            
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
            
        </div>
    );
 }
 
 export default Ejemplo2;